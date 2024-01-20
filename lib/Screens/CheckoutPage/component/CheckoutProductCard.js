import React, { useEffect, useState } from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'

const CheckoutProductCard = ({ Product, index, onUpdate = () => { } }) => {
    const [Quantity, onChangeQuantity] = useState(Product.Quantity);

    useEffect(() => {
        onUpdate(Quantity, index)
    }, [Quantity])

    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 9 }} >
            <View style={{ width: 80, height: 80, borderRadius: 100, backgroundColor: '#147EFB' }}></View>
            <View style={{ flexDirection: 'column', paddingHorizontal: 20 }}>
                <Text style={{ fontSize: 25 }}>{Product["Product Name"]}</Text>
                {
                    Product.Discount > 0 ?
                        <Text style={{ textDecorationLine: 'line-through' }}>Rp.{Product.Price}</Text> : null
                }
                <Text style={{}}>Rp.{Product.Price}</Text>
                <View style={{ flexDirection: 'row', marginVertical: 9, alignItems: 'center' }} >
                    <TextInput
                        style={{
                            width: 50,
                            height: 40,
                            margin: 12,
                            borderWidth: 1,
                            padding: 10,
                        }}
                        onChangeText={onChangeQuantity}
                        value={Quantity}
                        placeholder={`${Quantity}`}
                    />
                    <Text>{Product.Unit}</Text>
                </View>
            </View>

        </View>
    )
}

export default CheckoutProductCard