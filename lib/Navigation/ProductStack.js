
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductPage from "../Screens/ProductPage/ProductPage";
import ProductDetail from "../Screens/ProductPage/ProductDetail";

const ProductStack = createNativeStackNavigator();

const ProductScreenStack = () => {
    return (
        <ProductStack.Navigator initialRouteName="Home" screenOptions={{
            headerShown: false,
        }}>
            <ProductStack.Screen name="ProductPage" component={ProductPage} />
            <ProductStack.Screen name="ProductDetail" component={ProductDetail} />
        </ProductStack.Navigator>
    );
};

export { ProductScreenStack, ProductStack }