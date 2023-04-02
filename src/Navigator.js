import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

import Feed from './screens/Feed'
import { NavigationContainer,  } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddPhoto from './screens/AddPhoto';
import { createStackNavigator } from '@react-navigation/stack'
import Profile from './screens/Profile';
import { createSwitchNavigator } from '@react-navigation/compat';
import Login from './screens/Login';
import Register from './screens/Register';
const loginOrProfileRouter = createSwitchNavigator({
     Perfil: Profile,
     Auth: Login,
     Auth: MyStack
 }, {
   initialRouteName: 'Profile'
 })

 function MyStack() {
     const Stack = createStackNavigator()
     return (
       <Stack.Navigator initialRouteName='Login'>
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Register" component={Register} />
       </Stack.Navigator>
     )
   }
 

export default function MenuNavigator() {
     const Tab = createBottomTabNavigator();
     return (
          <NavigationContainer >
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