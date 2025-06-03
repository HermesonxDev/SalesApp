import { useEffect, useState } from "react"
import { Modal, View } from "react-native"
import { Buttons, Container, Fields, Form } from "./styles"
import Toast from "react-native-toast-message"
import api from "../../../Services/api"
import Title from "../../../components/Title"
import Label from "../../../components/Label"
import Input from "../../../components/Input"
import Button from "../../../components/Button"
import Loading from "../../../components/Loading"
import translate from "../../../utils/translate"
import { Customer, CustomerForm } from "../../../utils/interfaces"
import { format_CPF_and_CNPJ, formatPhone, unformat } from "../../../utils/functions"

interface IEditModalProps {
    customer: Customer | null,
    visible: boolean,
    onClose(): void,
    refresh(): void
}

const EditModal: React.FC<IEditModalProps> = ({
    customer,
    visible,
    onClose,
    refresh
}) => {
    
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

            const { data } = await api.put(`/edit/customer/${customer?.id}`, formData)

            Toast.show({
                type: 'success',
                text1: translate(data.message),
                visibilityTime: 3500
            })

            onClose()
            refresh()
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
        if (customer) {
            setFormState({
                first_name: customer?.first_name || '',
                last_name: customer?.last_name || '',
                telephone: customer?.telephone || '',
                cpf_cnpj: customer?.cpf_cnpj || '',
                address: customer?.address || ''
            })
        }
    }, [customer])

    return (
        <Modal
            animationType="fade"
            visible={visible}
        >
            <Container>
                <Form>
                    <Title>Editar Cliente</Title>

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
                                keyboardType="phone-pad"
                            />
                        </View>

                        <View>
                            <Label padding="0 0 3px 3px">CPF / CNPJ *</Label>
                            <Input
                                value={formState.cpf_cnpj}
                                onChangeText={(text) => handleChangeForm(text, 'cpf_cnpj')}
                                placeholder="Digite o CPF/CNPJ do Cliente"
                                keyboardType="phone-pad"
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

                    <Buttons>
                        <Button 
                            width="50%"
                            backgroundColor="#4CAF50"
                            onPress={handleSendForm}>Salvar</Button>
                        <Button 
                            width="50%"
                            backgroundColor="#F44336"
                            onPress={onClose}>Cancelar</Button>
                    </Buttons>
                </Form>

                <Loading visible={loading} />
            </Container>
        </Modal>
    )
}

export default EditModal