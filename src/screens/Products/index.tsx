import { useEffect, useState } from "react"
import { Container } from "./styles"
import { Feather } from "@expo/vector-icons"
import { Product, ProductModals } from "../../utils/interfaces"
import Toast from "react-native-toast-message"
import api from "../../Services/api"
import Title from "../../components/Title"
import Loading from "../../components/Loading"
import List from "../../components/List"
import EditModal from "../../features/product/EditModal"
import DeleteModal from "../../features/product/DeleteModal"

const Products: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [products, setProducts] = useState<Product[]>([])
    const [product, setProduct] = useState<Product | null>(null)

    const [modals, setModals] = useState<ProductModals>({
        edit: false,
        delete: false
    })

    const handleIdentifiesProduct = (id: number, modal: keyof ProductModals) => {
        const product = products.find(product => product.id === id)

        setProduct(product || null)

        handleModals(true, modal)
    }

    const handleModals = (value: boolean, key: keyof ProductModals) => {
        setModals((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    const getProducts = async () => {
        try {
            setLoading(true)

            const { data } = await api.get('/list/product')
            setProducts(data.data)

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
        getProducts()
    }, [])

    return (
        <Container>
            <Title
                margin="0 8% 0 0"
            >Produtos Cadastrados</Title>

            <List
                data={products}
                actions={{
                    option1: {
                        icon: <Feather name="edit-3" size={18} />,
                        onPress: (item) => handleIdentifiesProduct(item.id, 'edit')
                    },
                    option2: {
                        icon: <Feather name="trash-2" size={18}/>,
                        onPress: (item) => handleIdentifiesProduct(item.id, 'delete')
                    }
                }}
            />
        
            <Loading visible={loading} />

            <EditModal 
                product={product}
                visible={modals.edit}
                onClose={handleModals}
                onRefresh={getProducts}
            />

            <DeleteModal
                product={product}
                visible={modals.delete}
                onClose={handleModals}
                onRefresh={getProducts}
            />
        </Container>
    )
}

export default Products