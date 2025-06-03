import { Container, Fields, Form } from "./styles"
import { useState } from "react"
import { CustomerForm } from "../../utils/interfaces"
import { View } from "react-native"
import Title from "../../components/Title"
import Label from "../../components/Label"
import Input from "../../components/Input"
import Button from "../../components/Button"
import api from "../../Services/api"
import format_CPF_and_CNPJ from "../../utils/format_CPF_and_CNPJ"
import unformat from "../../utils/unformat"
import formatPhone from "../../utils/formatPhone"
import Toast from "react-native-toast-message"
import translate from "../../utils/translate"
import Loading from "../../components/Loading"

const AddCustomer: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false)

    const [formState, setFormState] = useState<CustomerForm>({
        first_name: '',
        last_name: '',
        telephone: '',
        cpf_cnpj: '',
        address: ''
    })

    const handleChangeForm = (value: string, key: keyof CustomerForm) => {
        setFormState((prev) => {

            if (key === 'telephone') {
                return {
                    ...prev,
                    [key]: formatPhone(value)
                }
            }

            if (key === 'cpf_cnpj') {
                return {
                    ...prev,
                    [key]: format_CPF_and_CNPJ(value)
                }
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
                telephone: unformat(formState.telephone),
                cpf_cnpj: unformat(formState.cpf_cnpj)
            }

            const { data } = await api.post('/create/customer', formData)

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
            first_name: '',
            last_name: '',
            telephone: '',
            cpf_cnpj: '',
            address: ''
        })
    }

    return (
        <Container>
            <Form>
                <Title>Adicionar Cliente</Title>

                <Fields>
                    <View>
                        <Label padding="0 0 3px 3px">Nome *</Label>
                        <Input
                            value={formState.first_name}
                            onChangeText={(text) => handleChangeForm(text, 'first_name')}
                            placeholder="Digite o Nome do Cliente"
                        />
                    </View>

                    <View>
                        <Label padding="0 0 3px 3px">Sobrenome *</Label>
                        <Input
                            value={formState.last_name}
                            onChangeText={(text) => handleChangeForm(text, 'last_name')}
                            placeholder="Digite o Sobrenome do Cliente"
                        />
                    </View>

                    <View>
                        <Label padding="0 0 3px 3px">Telefone</Label>
                        <Input
                            value={formState.telephone}
                            onChangeText={(text) => handleChangeForm(text, 'telephone')}
                            placeholder="Digite o Telefone do Cliente"
                        />
                    </View>

                    <View>
                        <Label padding="0 0 3px 3px">CPF / CNPJ *</Label>
                        <Input
                            value={formState.cpf_cnpj}
                            onChangeText={(text) => handleChangeForm(text, 'cpf_cnpj')}
                            placeholder="Digite o CPF/CNPJ do Cliente"
                        />
                    </View>

                    <View>
                        <Label padding="0 0 3px 3px">Endereço</Label>
                        <Input
                            value={formState.address}
                            onChangeText={(text) => handleChangeForm(text, 'address')}
                            placeholder="Digite o Endereço do Cliente"
                        />
                    </View>
                </Fields>

                <Button onPress={handleSendForm}>Salvar</Button>
            </Form>

            <Loading visible={loading} />
        </Container>
    )
}

export default AddCustomer