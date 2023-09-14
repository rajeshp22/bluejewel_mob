import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Carousel = () => {
  return (
    <View>
      <View style={styles.slide}>
        <Image source={item.image} style={styles.imgStyle} />
      </View>
    </View>
  )
}

export default Carousel

const styles = StyleSheet.create({})