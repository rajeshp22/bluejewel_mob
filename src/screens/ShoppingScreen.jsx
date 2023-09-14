import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Header from '../components/Header';
import BottomTab from '../components/BottomTab';


const ShoppingScreen = () => {
  return (
    <View>
      <Header/>
      <View>
        <Text style={{textAlign:'center', fontWeight:'bold', marginTop:70}}>Shoppin Cart</Text>
      </View>
      <BottomTab/>
    </View>
  )
}

export default ShoppingScreen

const styles = StyleSheet.create({})