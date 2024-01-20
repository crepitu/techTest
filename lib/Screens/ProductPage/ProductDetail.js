import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const ProductDetail = ({ route, navigation }) => {
    const { ProductData } = route.params
    const FinalPrice = ProductData.Price - (ProductData.Price * ProductData.Discount / 100)
    // {
    //     'Product Code': "SKUSKILNP",
    //     "Product Name": "So klin Pewangi",
    //     "Price": 15000,
    //     "Currency": "IDR",
    //     "Discount": 10,
    //     "Dimension": '13 cm x 10 cm',
    //     "Unit": "PCS"
    // },
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 80, paddingHorizontal: 20, }}>
            <View style={{
                width: 120, height: 120, borderRadius: 100, backgroundColor: '#147EFB',
                justifyContent: 'center', alignItems: 'center'
            }}>
                <Icon name="image-outline" color={'white'} size={50} />
            </View>
            <Text style={{ fontSize: 25, marginVertical: 20 }}>{ProductData["Product Name"]}</Text>
            <View style={{ width: '70%' }}>
                <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>
                    <Text style={{ textDecorationLine: 'line-through' }}>Price</Text>
                    <Text style={{}}>Rp.{FinalPrice}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>
                    <Text>Dimension</Text>
                    <Text style={{}}>{ProductData['Dimension']}</Text>
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10, justifyContent: 'space-between' }}>
                    <Text>Price Unit</Text>
                    <Text style={{}}>{ProductData['Unit']}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={() => { navigation.navigate('ProductPage') }} style={{
                marginTop: 20,
                width: 100, alignItems: 'center',
                backgroundColor: '#147EFB', padding: 10, borderRadius: 40
            }}>
                <Text style={{ color: 'white' }}>Buy</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductDetail