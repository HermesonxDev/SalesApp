import { NavigationContainer } from "@react-navigation/native"
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"

const Routes: React.FC = () => {

    const logged = true
    
    return (
        <NavigationContainer>
            {logged ? <AppRoutes /> : <AuthRoutes />}
        </NavigationContainer>
    )
}

export default Routes