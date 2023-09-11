import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from '../src/screens/LoginScreen';
import SignupScreen from '../src/screens/SignupScreen';
import HomeScreen from '../src/screens/HomeScreen';
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import ShoppingScreen from '../src/screens/ShoppingScreen';
import AccountScreen from '../src/screens/AccountScreen';
import WishListScreen from '../src/screens/WishListScreen';
// import { Ionicons } from "@expo/vector-icons";

const StackNavigator = () => {
    const Stack = createNativeStackNavigator();
    // const Tab = createBottomTabNavigator();

    // <Tab.Navigator>
    //     <Tab.Screen
    //         name="Home"
    //         component={HomeScreen}
    //         options={{
    //             tabBarLabel: "Home",
    //             tabBarLabelStyle: { color: '#008e97'},
    //             headerShown: false,
    //             tabBarIcon: ({ focused }) => 
    //             focused ? (
    //                 <Entypo name="home" size={24} color="#008E97" />
    //             ) : (
    //                 <AntDesign name="home" size={24} color="black" />
    //             ),
    //         }}
    //     />
    // </Tab.Navigator>

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="HomePage" component={HomeScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Cart" component={ShoppingScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Account" component={AccountScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Wishlist" component={WishListScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})