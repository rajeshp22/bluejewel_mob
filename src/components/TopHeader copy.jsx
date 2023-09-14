import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import AccountScreen from '../screens/AccountScreen';
import WishListScreen from '../screens/WishListScreen';

const TopHeader = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
    //   initialRouteName="HomeScreen"
      screenOptions={{
        tabBarActiveTintColor: '#333333',
      }}
    >
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Wishlist"
        component={WishListScreen}
        options={{
          tabBarLabel: 'WISHLIST',
          tabBarIcon: ({ color, size }) => (
            <Feather name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Account"
        component={AccountScreen}
        options={{
            tabBarLabel: 'ACCOUNT',
            tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="account-circle" size={size} color={color} />
            )
        }}
      />
      <Tab.Screen
        name="Cart"
        component={ShoppingScreen}
        options={{
            tabBarLabel: 'CART',
            tabBarIcon: ({ color, size }) => (
                <AntDesign name="shoppingcart" size={size} color={color} />
            ),
            tabBarBadge: 1,
        }}
      />
    </Tab.Navigator>
  )
}

export default TopHeader

const styles = StyleSheet.create({})