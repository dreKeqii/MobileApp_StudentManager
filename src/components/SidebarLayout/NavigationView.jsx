import React, { useState } from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './SidebarLayout.styles.js';
import { pages } from '../../routes/index.js';

const logo = require('../../../assets/favicon.png')

const NavigationView = ({ parent, isLogin, setIsLogin }) => {
    const navigation = useNavigation();

    const checkLogin = () => {
        if (isLogin) {
            setIsLogin(!isLogin)
            navigation.goBack()
            parent.current.closeDrawer()
        } else {
            navigation.navigate('Login')
            parent.current.closeDrawer()
        }
    }

    return (
        <View style={ styles.sidebar }>
            <View style={ styles.header }>
                <Image source={ logo } style={ styles.logo } />
                <Text style={ [styles.logoTitle] }>Students Manager</Text>
            </View>
            <View style={ styles.navWrapper }>
                { pages.map(page => {
                    return (
                        <TouchableNativeFeedback
                            key={ page.id }
                            onPress={
                                () => {
                                    navigation.navigate(page.screen)
                                    parent.current.closeDrawer()
                                }
                            }
                        >
                            <View
                                style={ styles.pageItems }
                            >
                                <Ionicons
                                    name={ page.icon }
                                    style={ styles.pageIcons }
                                />
                                <Text style={ styles.pageTitle }>{ page.title }</Text>
                            </View>
                        </TouchableNativeFeedback>
                    )
                }) }
                <TouchableNativeFeedback
                    onPress={ checkLogin }
                >
                    <View style={ [styles.pageItems, styles.oath] }>
                        <Ionicons name={ isLogin ? 'log-out-outline' : 'log-in-outline' } style={ styles.pageIcons } />
                        <Text style={ styles.pageTitle }>{ isLogin ? 'Logout' : 'Login' }</Text>
                    </View>
                </TouchableNativeFeedback>
            </View>
        </View>
    )
}

export default NavigationView