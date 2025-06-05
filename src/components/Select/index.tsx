import { Container, Content } from "./styles"
import { Picker } from "@react-native-picker/picker"
import Label from "../Label"

interface ISelectProps {
    data: any[],
    value: any,
    label: string,
    field: string,
    onLabel: (item: any) => string,
    onValue: (item: any) => string | number,
    onChange(value: string | number, field: string): void,
}

const Select: React.FC<ISelectProps> = ({
    data,
    value,
    label,
    field,
    onLabel,
    onValue,
    onChange
}) => {

    return (
        <Container>
            <Label padding="0 0 3px 3px">{ label }</Label>

            <Content>
                <Picker
                    selectedValue={value}
                    onValueChange={(value) => onChange(value, field)}
                >
                    <Picker.Item label="Selecione..." value={0} />
                    {data.map(item => (
                        <Picker.Item
                            key={onValue(item)}
                            label={onLabel(item)}
                            value={onValue(item)}
                        />
                    ))}
                </Picker>
            </Content>
        </Container>
    )
}

export default Select