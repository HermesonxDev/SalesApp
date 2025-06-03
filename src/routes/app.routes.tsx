import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import { Feather } from "@expo/vector-icons"
import Customers from "../screens/Customers";
import Products from "../screens/Products";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AddCustomer from "../screens/AddCustomer";
import AddProduct from "../screens/AddProduct";
import Logout from "../screens/Logout";
import PDV from "../screens/PDV";
import Orders from "../screens/Orders";

const Tab = createBottomTabNavigator()

const CustomersRoutes: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="list-customers"
                component={Customers}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    tabBarLabel: 'Listar Clientes'
                }}
            />

            <Tab.Screen
                name="add-customer"
                component={AddCustomer}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: 'Adicionar Cliente'
                }}
            />
        </Tab.Navigator>
    )
}

const ProductsRoutes: React.FC = () => {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="list-products"
                component={Products}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="package" color={color}
                    size={size} />,
                    tabBarLabel: 'Listar Produtos'
                }}
            />

            <Tab.Screen
                name="add-product"
                component={AddProduct}
                options={{
                    tabBarIcon: ({ color, size }) => <Feather name="plus" color={color} size={size} />,
                    tabBarLabel: 'Adicionar Produto'
                }}
            />
        </Tab.Navigator>
    )
}

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
                component={CustomersRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="user" color={color} size={size} />,
                    drawerLabel: 'Clientes'
                }}
            />

            <Drawer.Screen
                name="products"
                component={ProductsRoutes}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="package" color={color} size={size} />,
                    drawerLabel: 'Produtos'
                }}
            />

            <Drawer.Screen
                name="pdv"
                component={PDV}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="shopping-cart" color={color} size={size} />,
                    drawerLabel: 'PDV'
                }}
            />

            <Drawer.Screen
                name="orders"
                component={Orders}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="tag" color={color} size={size} />,
                    drawerLabel: 'Pedidos'
                }}
            />

            <Drawer.Screen
                name="logout"
                component={Logout}
                options={{
                    drawerIcon: ({ color, size }) => <Feather name="power" color={color} size={size} />,
                    drawerLabel: 'Sair'
                }}
            />
        </Drawer.Navigator>
    )
}

export default AppRoutes