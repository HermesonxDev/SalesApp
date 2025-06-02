import { TextProps } from "react-native";
import { Container } from "./styles";

interface ILabelProps extends TextProps {
    padding?: string,
}

const Label: React.FC<ILabelProps> = ({ children, padding, ...rest }) => (
    <Container padding={padding} {...rest}>{ children }</Container>
)

export default Label