import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const ProductCard = ({ ProductData = {} }) => {
    const navigation = useNavigation()
    const FinalPrice = ProductData.Price - (ProductData.Price * ProductData.Discount / 100)
    const goToProductDetail = () => {
        navigation.push("ProductDetail", { ProductData: ProductData })
    }
    return (
        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
            onPress={goToProductDetail}
        >
            <View style={{ width: 80, height: 80, borderRadius: 100, backgroundColor: '#147EFB' }}></View>
            <View style={{ flexDirection: 'column', paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 25 }}>{ProductData["Product Name"]}</Text>
                {
                    ProductData.Discount > 0 ?
                        <Text style={{ textDecorationLine: 'line-through' }}>Rp.{ProductData.Price}</Text> : null
                }
                <Text style={{}}>Rp.{FinalPrice}</Text>
                <TouchableOpacity onPress={() => { navigation.navigate('ProductPage') }} style={{
                    marginTop: 10,
                    width: 100, alignItems: 'center',
                    backgroundColor: '#147EFB', padding: 10, borderRadius: 40
                }}>
                    <Text style={{ color: 'white' }}>Buy</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard