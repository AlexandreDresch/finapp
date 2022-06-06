import { createNativeStackNavigator } from "@react-navigation/native-stack";


import { SignIn } from "../screens/SignIn";
import { Home } from "../screens/Home";


const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="SignIn" 
                component={SignIn}
                options={{headerShown: false}}
            />
            <Stack.Screen 
                name="Home" 
                component={Home}
            />
        </Stack.Navigator>
    )
};

