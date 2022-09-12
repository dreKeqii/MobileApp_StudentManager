import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './Login.styles';

const Login = () => {
    return (
        <View style={ styles.login }>
            <View style={ styles.inputForm }>
                <View style={ styles.header }>
                    <Text style={ styles.title }>Login</Text>
                </View>
                <View>
                    <TextInput style={ styles.input } placeholder='Full Name...' />
                    <TextInput style={ styles.input } placeholder='Password...' />
                    <TextInput style={ styles.input } placeholder='Email...' />
                    <TextInput style={ styles.input } placeholder='Phone...' />
                </View>
            </View>
        </View>
    )
}

export default Login;