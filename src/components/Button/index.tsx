import { TouchableOpacityProps } from "react-native";
import { Container, Label } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
    width?: string,
    backgroundColor?: string
}

const Button: React.FC<IButtonProps> = ({ children, width, backgroundColor, ...rest }) => (
    <Container
        width={width}
        backgroundColor={backgroundColor}
        activeOpacity={0.8}
        {...rest}
    >
        <Label>{ children }</Label>
    </Container>
)

export default Button