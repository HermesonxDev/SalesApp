import { useEffect, useState } from "react"
import { Container } from "./styles"
import { Feather } from "@expo/vector-icons"
import Toast from "react-native-toast-message"
import api from "../../Services/api"
import Title from "../../components/Title"
import { Order } from "../../utils/interfaces"
import Loading from "../../components/Loading"
import List from "../../components/List"

const Orders: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [orders, setOrders] = useState<Order[]>([])

    const getOrders = async () => {
        try {
            setLoading(true)

            const { data } = await api.get('/list/order')
            setOrders(data.data)

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
        getOrders()
    }, [])

    return (
        <Container>
            <Title
                margin="0 60% 0 0"
            >Pedidos</Title>

            <List
                data={orders}
                actions={{
                    option1: {
                        icon: <Feather name="eye" size={18} />,
                        onPress: (item) => () => {}
                    }
                }}
            />
            <Loading visible={loading} />
        </Container>
    )
}

export default Orders