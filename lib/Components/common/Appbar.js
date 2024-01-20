import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Appbar = ({ title = "", isHaveBackButton = true }) => {
    const navigation = useNavigation()
    return (
        <View style={{
            height: 45, width: '100%', backgroundColor: '#40A2D8',
            justifyContent: 'center', paddingHorizontal: 12,
        }}>
            <View style={{ flexDirection: 'row', }}>
                {isHaveBackButton && navigation.canGoBack() ?
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        style={{ justifyContent: 'center', marginRight: 12 }}>
                        <Icon name="arrow-left" color={"white"} size={20} />
                    </TouchableOpacity> : null}
                <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>{title}</Text>
            </View>
        </View>
    )
}

export default Appbar