import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView, ScrollView } from 'react-native-web'
// import Cat1 from '../../assets/fresh.jpeg'
import { Categories } from '../data/Categories'

const Category = () => {
  return (
    <SafeAreaView>
      <View>
        <Text style={{textAlign: 'center', backgroundColor:'#fff', fontWeight: 'bold'}}>SHAPE</Text>
      </View>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.conatiner}>
      {Categories.map(item => (
          <View key={item.id} style={styles.category}>
              <Image source={item.image} style={styles.imgStyle} />
              <Text style={styles.title}>{item.title}</Text>
          </View>
      ))}
    </ScrollView>
    </SafeAreaView>
    
  )
}

export default Category

const styles = StyleSheet.create({
    conatiner: {
        backgroundColor: '#FFFFFF',
        // padding: 10,
        paddingTop: 15,
        // flex:1,
      },
      imgStyle: {
        height: 50,
        width: 50,
      },
      title: {
        fontSize: 10,
        color: '#2c4341',
      },
      category: {
        paddingHorizontal: 8,
        alignItems: 'center',
      },
})