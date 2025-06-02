import { TextProps } from "react-native";
import { Container } from "./styles";

const Title: React.FC<TextProps> = ({ children, ...rest }) => (
    <Container {...rest}> { children } </Container>
)

export default Title