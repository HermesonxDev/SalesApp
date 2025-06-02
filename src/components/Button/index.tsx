import { TouchableOpacityProps } from "react-native";
import { Container, Label } from "./styles";

const Button: React.FC<TouchableOpacityProps> = ({ children, ...rest }) => (
    <Container
        activeOpacity={0.6}
        {...rest}
    >
        <Label>{ children }</Label>
    </Container>
)

export default Button