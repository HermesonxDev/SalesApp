import { Container, Field, Fields, Form } from "./styles"
import Title from "../../components/Title"
import Button from "../../components/Button"
import Label from "../../components/Label"
import Input from "../../components/Input"
import { useState } from "react"
import { AuthForm } from "../../utils/interfaces"

const Login: React.FC = () => {

    const [formState, setFormState] = useState<AuthForm>({
        email: '',
        password: ''
    })

    const handleChangeForm = (value: string, key: keyof AuthForm) => {
        setFormState(prev => ({
            ...prev,
            [key]: value
        }))    
    }

    return (
        <Container>
            <Form>
                <Title>Login</Title>

                <Fields>
                    <Field>
                        <Label
                            padding="0 0 3px 3px"
                        >Email</Label>
                        <Input
                            placeholder="Digite seu Email"
                            value={formState.email}
                            onChangeText={(text) => handleChangeForm(text, 'email')}
                        />
                    </Field>

                    <Field>
                        <Label
                            padding="0 0 3px 3px"
                        >Senha</Label>
                        <Input
                            placeholder="Digite sua Senha"
                            value={formState.password}
                            onChangeText={(text) => handleChangeForm(text, 'password')}
                        />
                    </Field>
                </Fields>

                <Button>Entrar</Button>
            </Form>
        </Container>
    )
}

export default Login