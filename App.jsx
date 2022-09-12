import React, { useRef, useState } from 'react';
import {
  DrawerLayoutAndroid,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import styles from './App.styles.js';

// Screens
import {
  Home,
  Dashboard,
  Todos,
  News,
  Profile,
  Settings,
  Login,
  Register
} from './src/screens/index';

// Components
import Title from './src/components/Title/Title.jsx';
import NavigationView from './src/components/SidebarLayout/NavigationView'
import UserAvatar from './src/components/UserProfile/Avatar.jsx';

// Library Using
const Stack = createNativeStackNavigator();

const userAvatar = require('./src/assets/images/Keqing-Avatar.png')


export default function App() {
  const sidebar = useRef(null);
  const [isLogin, setIsLogin] = useState(true)

  const Avatar = <UserAvatar userAvatar={ isLogin && userAvatar } isLogin={ isLogin } setIsLogin={ setIsLogin } />

  return (
    <SafeAreaView style={ styles.wrapper }>
      <StatusBar hidden={ true } />
      <NavigationContainer>
        <DrawerLayoutAndroid
          ref={ sidebar }
          renderNavigationView={ () =>
            <NavigationView
              parent={ sidebar }
              isLogin={ isLogin }
              setIsLogin={ setIsLogin }
            />
          }
          drawerWidth={ 360 }
          style={ styles.wrapper }
        >
          <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen
              name='Home'
              component={ Home }
              options={ {
                headerTitle: () => <Title title='Home' icon='bars' refer={ sidebar } />,
                headerRight: () => Avatar
              } }
            />
            <Stack.Screen
              name='Dashboard'
              component={ Dashboard }
              options={ {
                headerTitle: () => <Title title='Dashboard' />,
                headerRight: () => <UserAvatar userAvatar={ isLogin && userAvatar } />
              } }
            />
            <Stack.Screen
              name='Todos'
              component={ Todos }
              options={ {
                headerTitle: () => <Title title='Todos List' />,
                headerRight: () => <UserAvatar userAvatar={ isLogin && userAvatar } />
              } }
            />
            <Stack.Screen
              name='News'
              component={ News }
              options={ {
                headerTitle: () => <Title title='News' />,
                headerRight: () => <UserAvatar userAvatar={ isLogin && userAvatar } />
              } }
            />
            <Stack.Screen
              name='Profile'
              component={ Profile }
              options={ {
                headerTitle: () => <Title title='Profile' />,
              } }
            />
            <Stack.Screen
              name='Settings'
              component={ Settings }
              options={ {
                headerTitle: () => <Title title='Settings' />,
              } }
            />
            <Stack.Screen
              name='Login'
              component={ Login }
              options={ {
                headerTitle: () => <Title title='Login' />,
              } }
            />
            <Stack.Screen
              name='Register'
              component={ Register }
              options={ {
                headerTitle: () => <Title title='Register' />,
              } }
            />
          </Stack.Navigator>
        </DrawerLayoutAndroid>
      </NavigationContainer>
    </SafeAreaView >
  )
}