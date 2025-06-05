import { useState } from "react";
import Input from "../../components/Input";
import Label from "../../components/Label";
import { Container, Fields, Form } from "./styles";
import { ProductForm } from "../../utils/interfaces";
import Title from "../../components/Title";
import Button from "../../components/Button";
import { View } from "react-native";
import Toast from "react-native-toast-message";
import api from "../../Services/api";
import translate from "../../utils/translate";
import { formatCurrencyBRL, unformat } from "../../utils/functions";
import Loading from "../../components/Loading";

const AddProduct: React.FC = () => {

    const [loading, setLoading] = useState<boolean>(false)
    const [formState, setFormState] = useState<ProductForm>({
        name: "",
        value: "",
        description: "",
        quantity: "",
    })

    const handleChangeForm = (value: string, key: keyof ProductForm) => {
        setFormState((prev) => ({
            ...prev,
            [key]: value,
        }))
    }

    const handleSendForm = async () => {
        try {
            setLoading(true)

            const formData = {
                ...formState,
                value: parseFloat(unformat(formState.value)),
                quantity: parseFloat(formState.quantity),
            };

            const { data } = await api.post("/create/product", formData)

            Toast.show({
                type: "success",
                text1: translate(data.message),
                visibilityTime: 3500,
            })

            clearForm()
            setLoading(false)

        } catch (error) {
            setLoading(false)

            Toast.show({
                type: "error",
                text1: String(error),
                visibilityTime: 3500,
            })
        }
    }

    const clearForm = () => {
        setFormState({
            name: "",
            value: "",
            description: "",
            quantity: "",
        })
    }

    return (
        <Container>
            <Form>
                <Title>Adicionar Produto</Title>

                <Fields>
                <View>
                    <Label padding="0 0 3px 3px">Nome</Label>
                    <Input
                        value={formState.name}
                        onChangeText={(text) => handleChangeForm(text, "name")}
                        placeholder="Digite o Nome do Produto"
                    />
                </View>

                <View>
                    <Label padding="0 0 3px 3px">Valor</Label>
                    <Input
                        value={formState.value ? formatCurrencyBRL(formState.value) : ''}
                        placeholder="Digite o Valor do Produto"
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            const onlyDigits = text.replace(/\D/g, "");
                            handleChangeForm(onlyDigits, "value");
                        }}
                    />
                </View>

                <View>
                    <Label padding="0 0 3px 3px">Descrição</Label>
                    <Input
                        value={formState.description}
                        onChangeText={(text) => handleChangeForm(text, "description")}
                        placeholder="Digite a Descrição do Produto"
                        multiline
                        numberOfLines={5}
                        height="100px"
                    />
                </View>

                <View>
                    <Label padding="0 0 3px 3px">Quantidade</Label>
                    <Input
                        value={formState.quantity}
                        placeholder="Digite a Quantidade Inicial do Produto"
                        keyboardType="numeric"
                        onChangeText={(text) => handleChangeForm(text, "quantity")}
                    />
                </View>
                </Fields>

                <Button onPress={handleSendForm}>Salvar</Button>
            </Form>

            <Loading visible={loading} />
        </Container>
    )
}

export default AddProduct