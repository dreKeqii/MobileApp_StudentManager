import React from 'react';
import { View, Text } from 'react-native';
import NavigationContainer from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import styles from './TrashCan.styles.js';

const Stack = createNativeStackNavigator();

const TrashCan = () => {
    return (
        <View>
            <Text>Trash Can</Text>
        </View>
    )
}

export default TrashCan