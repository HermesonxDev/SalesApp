import { FlatList, View } from "react-native"
import { Container, Grid, Actions, Body, Text, Marker } from "./styles"
import { useEffect, useState } from "react"
import { Feather } from "@expo/vector-icons"
import { Customer, CustomerModals } from "../../utils/interfaces"
import api from "../../Services/api"
import Toast from "react-native-toast-message"
import Title from "../../components/Title"
import Button from "../../components/Button"
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

            <Grid>
                <FlatList
                    data={customers}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <Body>
                            <Marker
                                backgroundColor={!!item.active
                                    ? "#4CAF50"
                                    : "#F44336"
                                }
                            />
                            <Text> {item.first_name}</Text>
                            <Actions>
                                <Button
                                    width="35%"
                                    height="30px"
                                    onPress={() => handleIdentifiesCustomer(item.id, 'edit')}
                                >
                                    <Feather name="edit-3" size={18} />
                                </Button>
                                
                                <Button
                                    width="35%"
                                    height="30px"
                                    onPress={() => handleIdentifiesCustomer(item.id, 'delete')}
                                >
                                    <Feather name="trash-2" size={18}/>
                                </Button>
                            </Actions>
                        </Body>
                    )}
                    ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                />
            </Grid>
            
            <Loading visible={loading} />
            
            <EditModal
                customer={customer}
                visible={modals.edit}
                onClose={() => handleModals(false, 'edit')}
                onRefresh={getCustomers}
            />

            <DeleteModal
                customer={customer}
                visible={modals.delete}
                onClose={() => handleModals(false, 'delete')}
                onRefresh={getCustomers}
            />
        </Container>
    )
}

export default Customers