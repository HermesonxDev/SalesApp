import { useState } from "react"
import { Modal } from "react-native"
import { Container, Fields, Form, Options, Text } from "./styles"
import Toast from "react-native-toast-message"
import api from "../../../Services/api"
import Title from "../../../components/Title"
import Button from "../../../components/Button"
import Loading from "../../../components/Loading"
import { Customer } from "../../../utils/interfaces"
import translate from "../../../utils/translate"

interface IDeleteModalProps {
    customer: Customer | null,
    visible: boolean,
    onClose(): void,
    onRefresh(): void
}

const DeleteModal: React.FC<IDeleteModalProps> = ({
    customer,
    visible,
    onClose,
    onRefresh
}) => {

    const [loading, setLoading] = useState<boolean>(false)

    const handleSendForm = async () => {
        try {
            setLoading(true)

            const { data } = await api.delete(`/delete/customer/${customer?.id}`)

            Toast.show({
                type: 'success',
                text1: translate(data.message),
                visibilityTime: 3500
            })

            onClose()
            onRefresh()
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

    return (
        <Modal
            animationType="fade"
            visible={visible}
        >
            <Container>
                <Form>
                    <Title>Deletar Cliente</Title>

                    <Fields>
                        <Text>Tem certeza que deseja DELETAR o cliente [{customer?.first_name}] ?</Text>
                    </Fields>

                    <Options>
                        <Button 
                            width="50%"
                            backgroundColor="#4CAF50"
                            onPress={handleSendForm}>Confirmar</Button>
                        <Button 
                            width="50%"
                            backgroundColor="#F44336"
                            onPress={onClose}>Cancelar</Button>
                    </Options>
                </Form>

                <Loading visible={loading} />
            </Container>
        </Modal>
    )
}

export default DeleteModal