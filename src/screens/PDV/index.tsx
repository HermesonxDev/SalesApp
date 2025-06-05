import { Text } from "react-native"
import { Container } from "./styles"
import { useState } from "react"
import { PDVForm } from "../../utils/interfaces"

const PDV: React.FC = () => {

    const [formState, setFormState] = useState<PDVForm>({
        customer_id: 0,
        product_id: 0,
        product_quantity: '',
        description: '',
        value: ''
    })

    const handleChangeForm = (value: string | number, key: keyof PDVForm) => {
        setFormState((prev) => ({
            ...prev,
            [key]: value
        }))
    }
    
    return (
        <Container>
            <Text>PDV</Text>
        </Container>
    )
}

export default PDV