import React, { useState } from 'react';
import { View, Text } from 'react-native';
import DropShadow from 'react-native-drop-shadow';
import Login from './Login/Login';
import Register from './Register/Register'

import styles from './Oath.styles.js'

const Oath = () => {
    const [isLoginForm, setIsLoginForm] = useState(true)

    return (
        <View style={ styles.wrapper }>
            <Login />
        </View>
    )
}

export default Oath;