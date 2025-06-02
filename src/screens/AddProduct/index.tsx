import { useState } from "react"
import Input from "../../components/Input"
import Label from "../../components/Label"
import { Container, Field, Fields, Form } from "./styles"
import { ProductForm } from "../../utils/interfaces"

const AddProduct: React.FC = () => {

    const [formState, setFormState] = useState<ProductForm>({
        name: '',
        value: 0,
        description: '',
        quantity: 0
    })

    const handleChangeForm = (value: string | number, key: keyof ProductForm) => {
        setFormState((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    return (
        <Container>
            <Form>
                <Fields>
                    <Field>
                        <Label>Nome</Label>
                        <Input
                            value={formState.name}
                            onChangeText={(text) => handleChangeForm(text, 'name')}
                            placeholder="Digite o Nome do Produto"
                        />
                    </Field>

                    <Field>
                        <Label>Valor</Label>
                        <Input
                            value={formState.value === 0 ? '' : String(formState.value)}
                            onChangeText={(text) => handleChangeForm(parseFloat(text), 'value')}
                            placeholder="Digite o Valor do Produto"
                        />
                    </Field>

                    <Field>
                        <Label>Descrição</Label>
                        <Input
                            value={formState.description}
                            onChangeText={(text) => handleChangeForm(text, 'description')}
                            placeholder="Digite a Descrição do Produto"
                        />
                    </Field>

                    <Field>
                        <Label>Quantidade</Label>
                        <Input
                            value={formState.quantity === 0 ? '' : String(formState.quantity)}
                            onChangeText={(text) => handleChangeForm(parseFloat(text), 'quantity')}
                            placeholder="Digite a Quantidade Inicial do Produto"
                        />
                    </Field>
                </Fields>
            </Form>
        </Container>
    )
}

export default AddProduct