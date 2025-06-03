import { Container, Fields, Form } from "./styles"
import { useState } from "react"
import { CustomerForm } from "../../utils/interfaces"
import { View } from "react-native"
import Title from "../../components/Title"
import Label from "../../components/Label"
import Input from "../../components/Input"
import Button from "../../components/Button"

const AddCustomer: React.FC = () => {

    const [formState, setFormState] = useState<CustomerForm>({
        first_name: '',
        last_name: '',
        telephone: '',
        cpf_cnpj: '',
        address: ''
    })

    const handleChangeForm = (value: string, key: keyof CustomerForm) => {
        setFormState((prev) => ({
            ...prev,
            [key]: value
        }))
    }

    return (
        <Container>
            <Form>
                <Title>Adicionar Cliente</Title>

                <Fields>
                    <View>
                        <Label
                            padding="0 0 3px 3px"
                        >Nome</Label>
                        <Input
                            value={formState.first_name}
                            onChangeText={(text) => handleChangeForm(text, 'first_name')}
                            placeholder="Digite o Nome do Cliente"
                        />
                    </View>

                    <View>
                        <Label
                            padding="0 0 3px 3px"
                        >Sobrenome</Label>
                        <Input
                            value={formState.last_name}
                            onChangeText={(text) => handleChangeForm(text, 'last_name')}
                            placeholder="Digite o Sobrenome do Cliente"
                        />
                    </View>

                    <View>
                        <Label
                            padding="0 0 3px 3px"
                        >Telefone</Label>
                        <Input
                            value={formState.telephone}
                            onChangeText={(text) => handleChangeForm(text, 'telephone')}
                            placeholder="Digite o Telefone do Cliente"
                        />
                    </View>

                    <View>
                        <Label
                            padding="0 0 3px 3px"
                        >CPF / CNPJ</Label>
                        <Input
                            value={formState.cpf_cnpj}
                            onChangeText={(text) => handleChangeForm(text, 'cpf_cnpj')}
                            placeholder="Digite o CPF/CNPJ do Cliente"
                        />
                    </View>

                    <View>
                        <Label
                            padding="0 0 3px 3px"
                        >Endereço</Label>
                        <Input
                            value={formState.address}
                            onChangeText={(text) => handleChangeForm(text, 'address')}
                            placeholder="Digite o Endereço do Cliente"
                        />
                    </View>
                </Fields>

                <Button>Salvar</Button>
            </Form>
        </Container>
    )
}

export default AddCustomer