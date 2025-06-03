import { FlatList, View } from "react-native"
import { Container, Grid, Actions, Body, Text } from "./styles"
import { useEffect, useState } from "react"
import { Feather } from "@expo/vector-icons"
import { Customer } from "../../utils/interfaces"
import api from "../../Services/api"
import Toast from "react-native-toast-message"
import Title from "../../components/Title"
import Button from "../../components/Button"
import Loading from "../../components/Loading"

const Customers: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [customers, setCustomers] = useState<Customer[]>([])

    useEffect(() => {
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
                        <Text>{item.first_name}</Text>
                        <Actions>
                            <Button width="22%" height="30px">
                                <Feather name="edit-3" size={18}/>
                            </Button>
                            <Button width="22%" height="30px">
                                <Feather name="trash-2" size={18}/>
                            </Button>
                        </Actions>
                        </Body>
                    )}
                    ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
                />
            </Grid>

            <Loading visible={loading} />
        </Container>
    )
}

export default Customers