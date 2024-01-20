import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import ProductCard from './Components/ProductCard'
const dummyData = [
    {
        'Product Code': "SKUSKILNP",
        "Product Name": "So klin Pewangi",
        "Price": 15000,
        "Currency": "IDR",
        "Discount": 10,
        "Dimension": '13 cm x 10 cm',
        "Unit": "PCS"
    },
    {
        'Product Code': "SKUSKILNP2",
        "Product Name": "So Produk 2",
        "Price": 13000,
        "Currency": "IDR",
        "Discount": 0,
        "Dimension": '13 cm x 10 cm',
        "Unit": "PCS"
    },
    {
        'Product Code': "SKUSKILNP3",
        "Product Name": "So Produk 3",
        "Price": 12000,
        "Currency": "IDR",
        "Discount": 3,
        "Dimension": '13 cm x 10 cm',
        "Unit": "PCS"
    },
    {
        'Product Code': "SKUSKILNP4",
        "Product Name": "So Produk 4",
        "Price": 1000,
        "Currency": "IDR",
        "Discount": 10,
        "Dimension": '13 cm x 10 cm',
        "Unit": "PCS"
    },
    {
        'Product Code': "SKUSKILNP5",
        "Product Name": "So Produk 5",
        "Price": 152000,
        "Currency": "IDR",
        "Discount": 10,
        "Dimension": '13 cm x 10 cm',
        "Unit": "PCS"
    },
    {
        'Product Code': "SKUSKILNP6",
        "Product Name": "So Produk 6",
        "Price": 1500,
        "Currency": "IDR",
        "Discount": 0,
        "Dimension": '13 cm x 10 cm',
        "Unit": "PCS"
    },

]
const ProductPage = ({ navigation }) => {
    return (
        <View style={{ marginVertical: 20, marginHorizontal: 20 }}>
            <FlatList data={dummyData} renderItem={({ item, index }) => {
                return <ProductCard ProductData={item} key={index}></ProductCard>
            }}>
            </FlatList>
            {dummyData.length > 0 ?
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity onPress={() => { navigation.push("ProductCheckout") }} style={{
                        marginTop: 20,
                        width: 100, alignItems: 'center',
                        backgroundColor: '#147EFB', padding: 10, borderRadius: 40
                    }}>
                        <Text style={{ color: 'white' }}>Checkout</Text>
                    </TouchableOpacity>
                </View>
                : <View />}
        </View>
    )
}

export default ProductPage

