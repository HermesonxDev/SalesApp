import { TextInputProps } from "react-native";
import { Container } from "./styles";

interface IInputProps extends TextInputProps {
    width?: string,
    height?: string,
    backgroundColor?: string
}

const Input: React.FC<IInputProps> = ({ children, width, height, backgroundColor, ...rest }) => (
    <Container
        width={width}
        height={height}
        backgroundColor={backgroundColor}
        {...rest}
    >{ children }</Container>
)

export default Input