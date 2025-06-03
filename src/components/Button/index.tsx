import { TouchableOpacityProps } from "react-native";
import { Container, Label } from "./styles";

interface IButtonProps extends TouchableOpacityProps {
    width?: string,
    height?: string,
    backgroundColor?: string
}

const Button: React.FC<IButtonProps> = ({ children, width, height, backgroundColor, ...rest }) => (
    <Container
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        activeOpacity={0.8}
        {...rest}
    >
        <Label>{ children }</Label>
    </Container>
)

export default Button