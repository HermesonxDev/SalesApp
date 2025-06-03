import { Options, Container } from "./styles"
import Button from "../../components/Button"

const Logout: React.FC = () => {
    return (
        <Container>
            <Options>
                <Button
                    width="45%"
                    backgroundColor="#4CAF50"
                >Confirmar</Button>
                
                <Button
                    width="45%"
                    backgroundColor="#F44336"
                >Cancelar</Button>
            </Options>
        </Container>
    )
}

export default Logout