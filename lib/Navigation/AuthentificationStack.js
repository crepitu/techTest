
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../Screens/AuthentificationPage/LoginScreen";

const AuthStack = createNativeStackNavigator();

const AuthentificationStack = () => {
    return (
        <AuthStack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
        }}>
            <AuthStack.Screen name="Home" component={LoginScreen} />
        </AuthStack.Navigator>
    );
};

export { AuthentificationStack, AuthStack }