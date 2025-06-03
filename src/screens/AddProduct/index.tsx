import { useState } from "react"
import Input from "../../components/Input"
import Label from "../../components/Label"
import { Container, Fields, Form } from "./styles"
import { ProductForm } from "../../utils/interfaces"
import Title from "../../components/Title"
import Button from "../../components/Button"
import { View } from "react-native"

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
                <Title>Adicionar Produto</Title>

                <Fields>
                    <View>
                        <Label
                            padding="0 0 3px 3px"
                        >Nome</Label>
                        <Input
                            value={formState.name}
                            onChangeText={(text) => handleChangeForm(text, 'name')}
                            placeholder="Digite o Nome do Produto"
                        />
                    </View>

                    <View>
                        <Label
                            padding="0 0 3px 3px"
                        >Valor</Label>
                        <Input
                            value={formState.value === 0 ? '' : String(formState.value)}
                            onChangeText={(text) => handleChangeForm(parseFloat(text), 'value')}
                            placeholder="Digite o Valor do Produto"
                        />
                    </View>

                    <View>
                        <Label
                            padding="0 0 3px 3px"
                        >Descrição</Label>
                        <Input
                            value={formState.description}
                            onChangeText={(text) => handleChangeForm(text, 'description')}
                            placeholder="Digite a Descrição do Produto"
                            multiline
                            numberOfLines={5}
                            height="100px"
                        />
                    </View>

                    <View>
                        <Label
                            padding="0 0 3px 3px"
                        >Quantidade</Label>
                        <Input
                            value={formState.quantity === 0 ? '' : String(formState.quantity)}
                            onChangeText={(text) => handleChangeForm(parseFloat(text), 'quantity')}
                            placeholder="Digite a Quantidade Inicial do Produto"
                        />
                    </View>
                </Fields>

                <Button>Salvar</Button>
            </Form>
        </Container>
    )
}

export default AddProduct