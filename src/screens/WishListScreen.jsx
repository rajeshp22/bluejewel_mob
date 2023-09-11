import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import Header from '../components/Header';
import BottomTab from '../components/BottomTab';


const WishListScreen = () => {
  return (
    <View>
      <Header/>
      <View>
        <Text style={{textAlign:'center', fontWeight:'bold', marginTop:70}}>Wishlist</Text>
      </View>
      <BottomTab/>
    </View>
  )
}

export default WishListScreen

const styles = StyleSheet.create({})