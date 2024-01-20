import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ProductScreenStack } from './ProductStack';
import { AuthentificationStack } from './AuthentificationStack';
import CheckoutPage from '../Screens/CheckoutPage/CheckoutPage';


const Stack = createNativeStackNavigator();
const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerShown: false,
            }}>
                <Stack.Screen name="LoginPage" component={AuthentificationStack} />
                <Stack.Screen name="ProductStack" component={ProductScreenStack} />
                <Stack.Screen name="ProductCheckout" component={CheckoutPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigator;