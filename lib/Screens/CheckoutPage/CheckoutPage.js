import React, { useMemo, useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import CheckoutProductCard from './component/CheckoutProductCard'

const dummyData = [
    {
        'Product Code': "SKUSKILNP",
        "Product Name": "So klin Pewangi",
        "Price": 15000,
        "Currency": "IDR",
        "Discount": 10,
        "Quantity": 1,
        "Unit": "PCS"
    },
    {
        'Product Code': "SKUSKILNP2",
        "Product Name": "So Produk 2",
        "Price": 13000,
        "Currency": "IDR",
        "Discount": 0,
        "Quantity": 2,
        "Unit": "PCS"
    },
    {
        'Product Code': "SKUSKILNP3",
        "Product Name": "So Produk 3",
        "Price": 12000,
        "Currency": "IDR",
        "Discount": 3,
        "Quantity": 1,
        "Unit": "PCS"
    },

]

const CheckoutPage = ({ navigation }) => {
    const [ProductCheckout, setProductCheckout] = useState(dummyData)
    const TotalPrice = () => {
        let total = 0
        ProductCheckout.map((product) => {
            total += product.Price - (product.Price * product.Discount / 100) * product.Quantity
        })
        return total
    }
    const updateProduct = (product, index) => {
        setProductCheckout()
    }
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 80, }}>
            <View style={{ flexDirection: 'row', marginVertical: 20, borderColor: 'grey', borderWidth: 1, paddingHorizontal: 10, paddingVertical: 5 }}>
                <Text>Total : </Text>
                <Text>Rp. {TotalPrice()}</Text>
            </View>
            <FlatList data={dummyData} renderItem={({ item, index }) => {
                return <CheckoutProductCard Product={item} key={index}></CheckoutProductCard>
            }}>
            </FlatList>
            <TouchableOpacity onPress={() => { navigation.navigate('ProductStack') }} style={{
                marginTop: 10,
                width: 100, alignItems: 'center',
                backgroundColor: '#147EFB', padding: 10, borderRadius: 40
            }}>
                <Text style={{ color: 'white' }}>Confirm</Text>
            </TouchableOpacity>
        </View>
    )
}

export default CheckoutPage