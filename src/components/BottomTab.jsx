import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
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
        name="Home"
        component={LoginScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
  
            // Do something with the `navigation` object
            navigation.navigate("HomePage"); // Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          },
        })}
        options={{
          tabBarLabel: 'HOME',
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="Wish"
        component={WishListScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
  
            // Do something with the `navigation` object
            navigation.navigate("Wishlist"); // Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          },
        })}
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
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
  
            // Do something with the `navigation` object
            navigation.navigate("Login"); // Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          },
        })}
        options={{
            tabBarLabel: 'ACCOUNT',
            tabBarIcon: ({ color, size }) => (
                <MaterialIcons name="account-circle" size={size} color={color} />
            )
        }}
      /> 

      <Tab.Screen
        name="Shopping-Cart"
        component={ShoppingScreen}
        listeners={({ navigation }) => ({
          tabPress: (e) => {
            // Prevent default action
            e.preventDefault();
  
            // Do something with the `navigation` object
            navigation.navigate("Cart"); // Here!!!!!!!!!!!!!!!!!!!!!!!!!!!!
          },
        })}
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