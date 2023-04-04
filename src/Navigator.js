import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import { NavigationContainer, } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddPhoto from './screens/AddPhoto';
import { createStackNavigator } from '@react-navigation/stack'
import Profile from './screens/Profile';
import { createSwitchNavigator } from '@react-navigation/compat';
import Login from './screens/Login';
import Register from './screens/Register';
import Splash from './screens/Splash';
import { Component } from 'react';
const loginOrProfileRouter = createSwitchNavigator({
     Perfil: Profile,
     Auth: Login,
     Auth: MyStack
}, {
     initialRouteName: 'Profile'
})
const Stack = createStackNavigator()

function MyStack() {
     return (
          <Stack.Navigator initialRouteName='Login'>
               <Stack.Screen name="Login" component={Login} />
               <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
     )
}


function MenuNavigator() {
     const Tab = createBottomTabNavigator();
     return (
          <NavigationContainer  independent={true}>
               <Tab.Navigator screenOptions={{ headerShown: false }}>
                    <Tab.Screen name="Home" component={Feed}
                         options={{
                              tabBarShowLabel: false,
                              tabBarIcon: ({ color }) => (
                                   <Icon name='home' size={30} color={color} />
                              ),
                         }} />
                    <Tab.Screen name="AddPhoto" component={AddPhoto}
                         options={{
                              tabBarShowLabel: false,
                              tabBarIcon: ({ color }) => (
                                   <Icon name='camera' size={30} color={color} />
                              ),
                         }} />
                    <Tab.Screen name="Profile" component={loginOrProfileRouter}
                         options={{
                              tabBarShowLabel: false,
                              tabBarIcon: ({ color }) => (
                                   <Icon name='user' size={30} color={color} />
                              ),
                         }} />
               </Tab.Navigator>
          </NavigationContainer>
     );
}

export default class SplashRouter extends Component {
     render() {
          return (
               <NavigationContainer >
                    <Stack.Navigator initialRouteName='Splash'>
                         <Stack.Screen name='Splash' component={Splash}
                              options={{ headerShown: false }} />
                         <Stack.Screen name='App' component={MenuNavigator}
                              options={{ headerShown: false }} />
                    </Stack.Navigator>
               </NavigationContainer>
          )
     }
}