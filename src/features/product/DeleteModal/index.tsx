import { Text } from "react-native"
import { Container } from "./styles"

interface IDeleteModalProps {
    visible: boolean
}

const DeleteModal: React.FC<IDeleteModalProps> = ({ visible }) => {
    return (
        <Container
            animationType="fade"
            visible={visible}
        >
            <Text>Delete Product Modal</Text>
        </Container>
    )
}

export default DeleteModal