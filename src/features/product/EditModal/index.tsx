import { Text } from "react-native"
import { Container } from "./styles"

interface IEditModalProps {
    visible: boolean,
    onClose(): void
}

const EditModal: React.FC<IEditModalProps> = ({ visible, onClose }) => {
    return (
        <Container
            animationType="fade"
            visible={visible}
        >
            <Text>Edit Product Modal</Text>
        </Container>
    )
}

export default EditModal