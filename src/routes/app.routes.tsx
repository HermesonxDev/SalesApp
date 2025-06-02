import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import { Feather } from "@expo/vector-icons"
import Customers from "../screens/Customers";
import Products from "../screens/Products";

const Drawer = createDrawerNavigator()

const AppRoutes: React.FC = () => {
    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen
                name="home"
                component={Home}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="home" color={color} size={size} />,
                    drawerLabel: 'Início'
                }}
            />

            <Drawer.Screen
                name="customers"
                component={Customers}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    drawerLabel: 'Clientes'
                }}
            />

            <Drawer.Screen
                name="products"
                component={Products}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="package" color={color} size={size} />,
                    drawerLabel: 'Produtos'
                }}
            />
        </Drawer.Navigator>
    )
}

export default AppRoutes