import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";

const Stack = createStackNavigator()

const AuthRoutes: React.FC = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="login"
                component={Login}
            />
        </Stack.Navigator>
    )
}

export default AuthRoutes