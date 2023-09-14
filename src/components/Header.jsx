import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-web'

const Header = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require('../../assets/logo.png')} style={styles.imgStyle} />
      </View>
    </SafeAreaView>
    
  )
}

export default Header

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#EADDCA',
  },
  imgStyle: {
    height: 40,
    width: 100,
  },
})