import { useEffect, useState } from "react"
import { Modal, Switch, View } from "react-native"
import { Buttons, Container, Fields, Form, SwitchField } from "./styles"
import { Product, ProductForm } from "../../../utils/interfaces"
import Toast from "react-native-toast-message"
import api from "../../../Services/api"
import translate from "../../../utils/translate"
import Label from "../../../components/Label"
import Input from "../../../components/Input"
import Title from "../../../components/Title"
import Button from "../../../components/Button"
import Loading from "../../../components/Loading"
import { formatCurrencyBRL, unformat } from "../../../utils/functions"

interface IEditModalProps {
    product: Product | null,
    visible: boolean,
    onClose(value: boolean, modal: string): void,
    onRefresh(): void
}

const EditModal: React.FC<IEditModalProps> = ({
    product,
    visible,
    onClose,
    onRefresh
}) => {

    const [loading, setLoading] = useState<boolean>(false)
    const [formState, setFormState] = useState<ProductForm>({
        name: "",
        value: "",
        description: "",
        quantity: "",
        active: false
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
                value: parseFloat(unformat(formState.value)) / 100,
                quantity: parseFloat(formState.quantity),
            }

            const { data } = await api.put(`/edit/product/${product?.id}`, formData)

            Toast.show({
                type: "success",
                text1: translate(data.message),
                visibilityTime: 3500,
            })

            onClose(false, 'edit')
            onRefresh()
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

    const toggleSwitch = () => setFormState((prev) => ({
        ...prev,
        active: !formState.active
    }))

    useEffect(() => {
        if (product) {
            setFormState({
                name: product?.name ||"",
                value: String(product?.value) || "",
                description: product?.description || "",
                quantity: String(product?.quantity) || "",
                active: !!product?.active || false
            })
        }
    }, [product])

    return (
        <Modal
            animationType="fade"
            visible={visible}
        >
            <Container>
                <Form>
                    <Title>Editar Produto</Title>

                    <Fields>

                        <SwitchField>
                            <Label padding="0 0 3px 3px">Ativo</Label>
                            <Switch
                                value={formState.active}
                                onValueChange={toggleSwitch}
                                thumbColor={'#fff'}
                                trackColor={{ true: '#4CAF50', false: "#F44336" }}
                            />
                        </SwitchField>

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
                                    const onlyDigits = unformat(text);
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

                    <Buttons>
                        <Button 
                            width="50%"
                            backgroundColor="#4CAF50"
                            onPress={handleSendForm}
                        >Salvar</Button>

                        <Button 
                            width="50%"
                            backgroundColor="#F44336"
                            onPress={() => onClose(false, 'edit')}
                        >Cancelar</Button>
                    </Buttons>
                </Form>

                <Loading visible={loading} />
            </Container>
        </Modal>
    )
}

export default EditModal