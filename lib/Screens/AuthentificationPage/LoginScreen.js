import React, { useState } from 'react'
import { Button, Text, TextInput, TouchableOpacity, View } from 'react-native'
import Appbar from '../../Components/common/Appbar'
import LoginStyle from './LoginStyle';
const LoginScreen = ({ navigation }) => {
    const [UserName, onChangeUserName] = useState('');
    const [Password, onChangePassword] = useState('');
    const onLogin = () => {
        navigation.navigate("ProductStack")
    }
    return (
        <View style={{ justifyContent: 'center', alignContent: 'center', flex: 1 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                <Text style={{ fontSize: 40 }}>
                    LOGIN
                </Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 50 }}>
                <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                    <TextInput
                        style={LoginStyle.textInputStyle}
                        onChangeText={onChangeUserName}
                        value={UserName}
                        placeholder="Username"
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={LoginStyle.textInputStyle}
                        onChangeText={onChangePassword}
                        value={Password}
                        placeholder="Password"
                        secureTextEntry={true}
                    />
                    <TouchableOpacity onPress={onLogin} style={{
                        marginTop: 10,
                        width: 100, alignItems: 'center',
                        backgroundColor: '#147EFB', padding: 10, borderRadius: 40
                    }}>
                        <Text style={{ color: 'white' }}>Login</Text>
                    </TouchableOpacity>
                </View>

            </View>
            {/* <Button title='goToProfilePage'></Button> */}
        </View>
    )
}

export default LoginScreen