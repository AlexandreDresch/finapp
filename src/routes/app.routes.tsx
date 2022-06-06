import { createDrawerNavigator } from "@react-navigation/drawer";
import theme from "../global/theme";
import { NavigationContainer } from '@react-navigation/native';

import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";
import { NewData } from "../screens/NewData";
import { Profile } from "../screens/Profile";

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
    return (

        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: theme.colors.background_primary
                    
                },
                drawerLabelStyle: {
                    fontWeight: 'bold',
                },
                drawerActiveTintColor: theme.colors.main,
                drawerActiveBackgroundColor: theme.colors.background_primary,
                drawerInactiveBackgroundColor: theme.colors.background_secondary,
                drawerInactiveTintColor: theme.colors.text,
                drawerItemStyle: {
                    marginVertical: 5,
                }
            }}
            
        >
            <Drawer.Screen
                name="Cadastrar/Mudar Nome"
                component={SignIn}
                options={{
                    drawerItemStyle: { height: 0 },
                    headerShown: false
                  }}
                
            />
            <Drawer.Screen
                name="Página Inicial"
                component={Home}
                options={{
                        headerShown: false
                }}
            />

            <Drawer.Screen
                name="NewData"
                component={NewData}
                options={{
                    headerShown: false
                }}
            />

            <Drawer.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: false
                }}
            />

            
        </Drawer.Navigator>

    )
};

