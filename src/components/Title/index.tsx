import { TextProps } from "react-native";
import { Container } from "./styles";

interface ITitleProps extends TextProps {
    margin?: string
}

const Title: React.FC<ITitleProps> = ({ children, margin, ...rest }) => (
    <Container margin={margin} {...rest}>
        { children }
    </Container>
)

export default Title