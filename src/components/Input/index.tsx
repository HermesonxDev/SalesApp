import { TextInputProps } from "react-native";
import { Container } from "./styles";

interface IInputProps extends TextInputProps {
    width?: string,
    backgroundColor?: string
}

const Input: React.FC<IInputProps> = ({ children, width, backgroundColor, ...rest }) => (
    <Container
        width={width}
        backgroundColor={backgroundColor}
        {...rest}
    >{ children }</Container>
)

export default Input