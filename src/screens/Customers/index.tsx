import { useEffect, useState } from "react"
import { Container } from "./styles"
import { Feather } from "@expo/vector-icons"
import { Customer, CustomerModals } from "../../utils/interfaces"
import Toast from "react-native-toast-message"
import api from "../../Services/api"
import List from "../../components/List"
import Title from "../../components/Title"
import Loading from "../../components/Loading"
import EditModal from "../../features/customer/EditModal"
import DeleteModal from "../../features/customer/DeleteModal"

const Customers: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [customers, setCustomers] = useState<Customer[]>([])
    const [customer, setCustomer] = useState<Customer | null>(null)

    const [modals, setModals] = useState<CustomerModals>({
        edit: false,
        delete: false
    })

    const handleIdentifiesCustomer = (id: number, modal: keyof CustomerModals) => {
        const customer = customers.find(customer => customer.id === id)

        setCustomer(customer || null)

        handleModals(true, modal)
    }

    const handleModals = (value: boolean, key: keyof CustomerModals) => {
        setModals((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    const getCustomers = async () => {
        try {
            setLoading(true)

            const { data } = await api.get('/list/customer')
            setCustomers(data.data)

            setLoading(false)
        } catch (error) {
            setLoading(false)

            Toast.show({
                type: 'error',
                text1: String(error),
                visibilityTime: 3500
            })
        }
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <Container>
            <Title
                margin="0 11% 0 0"
            >Clientes Cadastrados</Title>

            <List
                data={customers}
                actions={{
                    option1: {
                        icon: <Feather name="edit-3" size={18} />,
                        onPress: (item) => handleIdentifiesCustomer(item.id, 'edit')
                    },
                    option2: {
                        icon: <Feather name="trash-2" size={18}/>,
                        onPress: (item) => handleIdentifiesCustomer(item.id, 'delete')
                    }
                }}
            />
            
            <Loading visible={loading} />
            
            <EditModal
                customer={customer}
                visible={modals.edit}
                onClose={handleModals}
                onRefresh={getCustomers}
            />

            <DeleteModal
                customer={customer}
                visible={modals.delete}
                onClose={handleModals}
                onRefresh={getCustomers}
            />
        </Container>
    )
}

export default Customers