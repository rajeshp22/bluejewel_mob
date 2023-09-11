import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react';
import { useNavigation } from "@react-navigation/native";
import Header from '../components/Header';
import Category from '../components/Category';
import DiamondTable from '../components/DiamondTable';
import BottomTab from '../components/BottomTab';



const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View>
        <Header />
        <Category />
        <DiamondTable />

        <Pressable onPress={() => navigation.navigate('Signup')} style={{marginTop:10}}>
          <Text style={{textAlign: 'center', fontSize:16, color:'gray'}}>Don't have an account?Singup</Text>
        </Pressable>
        
        <BottomTab />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})