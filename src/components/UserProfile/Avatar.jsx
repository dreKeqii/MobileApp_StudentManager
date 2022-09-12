import React from "react";
import { Image, Pressable } from "react-native";
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'

import styles from './UserAvatar.styles.js'

const UserAvatar = ({ userAvatar, isLogin }) => {
    const navigation = useNavigation()

    const checkLogin = () => {
        if (isLogin) {
            navigation.navigate('Profile')
            return
        } else {
            navigation.navigate('Login')
            return
        }
    }

    return (
        <Pressable onPress={ checkLogin }>
            {
                userAvatar ?
                    <Image source={ userAvatar } style={ styles.avatar } /> :
                    <Ionicons name='person-circle-outline' style={ styles.fallbackIcon } />
            }
        </Pressable>
    )
}

export default UserAvatar