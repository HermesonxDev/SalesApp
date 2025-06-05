import { View } from "react-native"
import { Container, Fields, Form } from "./styles"
import { useEffect, useState } from "react"
import { Customer, PDVForm, Product } from "../../utils/interfaces"
import Title from "../../components/Title"
import Label from "../../components/Label"
import Input from "../../components/Input"
import Button from "../../components/Button"
import Loading from "../../components/Loading"
import api from "../../Services/api"
import Toast from "react-native-toast-message"
import { Picker } from "@react-native-picker/picker"
import { formatCurrencyBRL } from "../../utils/functions"
import translate from "../../utils/translate"

const PDV: React.FC = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [customers, setCustomers] = useState<Customer[]>([])
    const [loading, setLoading] = useState<boolean>(false)

    const [formState, setFormState] = useState<PDVForm>({
        customer_id: 0,
        product_id: 0,
        product_quantity: '',
        description: '',
        value: ''
    })

    const handleChangeForm = (value: string | number, key: keyof PDVForm) => {
        setFormState((prev) => {

            if (key === 'product_id') {
                const product = products.find(product => product.id === Number(value))

                return {
                    ...prev,
                    product_quantity: '1',
                    product_id: Number(value),
                    value: product ? String(product.value) : ''
                }
            }

            if (key === 'product_quantity') {
                const quantity = Number(value);
                const product = products.find(p => p.id === formState.product_id);

                const newValue = product
                    ? String((quantity * Number(product.value)).toFixed(2))
                    : '';

                return {
                    ...prev,
                    [key]: String(value),
                    value: newValue
                };
            }

            return {
                ...prev,
                [key]: value
            }
        })
    }

    const handleSendForm = async () => {
        try {
            setLoading(true)

            const formData = {
                ...formState,
                value: parseFloat(formState.value),
                quantity: parseFloat(formState.product_quantity)
            }

            const { data } = await api.post('/create/order', formData)

            Toast.show({
                type: 'success',
                text1: translate(data.message),
                visibilityTime: 3500
            })

            clearForm()
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

    const clearForm = () => {
        setFormState({
            customer_id: 0,
            product_id: 0,
            product_quantity: '',
            description: '',
            value: ''
        })
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
        getCustomers()
        getProducts()
    }, [])

    return (
        <Container>
            <Form>
                <Title>Venda</Title>

                <Fields>
                    <View>
                        <Label padding="0 0 3px 3px">Cliente *</Label>
                        <Picker
                            selectedValue={formState.customer_id}
                            onValueChange={(value) => handleChangeForm(value, 'customer_id')}
                            style={{ borderWidth: 1 }}
                        >
                            <Picker.Item label="Selecione um cliente" value={0} />
                            {customers.map(customer => (
                                <Picker.Item
                                    key={customer.id}
                                    label={customer.first_name + ' ' + customer.last_name}
                                    value={customer.id}
                                />
                            ))}
                        </Picker>
                    </View>

                    <View>
                        <Label padding="0 0 3px 3px">Produto *</Label>
                        <Picker
                            selectedValue={formState.product_id}
                            onValueChange={(value) => handleChangeForm(value, 'product_id')}
                        >
                            <Picker.Item label="Selecione um produto" value={0} />
                            {products.map(product => (
                                <Picker.Item
                                    key={product.id}
                                    label={product.name}
                                    value={product.id}
                                />
                            ))}
                        </Picker>
                    </View>

                    <View>
                        <Label padding="0 0 3px 3px">Quantidade *</Label>
                        <Input
                            value={formState.product_quantity}
                            placeholder="Digite a quantidade do Produto"
                            keyboardType="numeric"
                            onChangeText={(text) => handleChangeForm(text, "product_quantity")}
                        />
                    </View>

                    <View>
                        <Label padding="0 0 3px 3px">Descrição</Label>
                        <Input
                            value={formState.description}
                            onChangeText={(text) => handleChangeForm(text, "description")}
                            placeholder="Digite a descrição da Venda"
                            multiline
                            numberOfLines={5}
                            height="100px"
                        />
                    </View>

                    <View>
                        <Label padding="0 0 3px 3px">Valor</Label>
                        <Input
                            value={formState.value ? formatCurrencyBRL(formState.value) : ''}
                            placeholder="Valor da venda"
                            editable={false}
                        />
                    </View>
                </Fields>

                <Button onPress={handleSendForm}>Salvar</Button>
            </Form>
            
            <Loading visible={loading} />
        </Container>
    )
}

export default PDV