import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

const SubHeader = () => {
  return (
    <View style={{backgroundColor: '#EADDCA', borderWidth: 1, borderColor: 'gray'}}>
        <View style={styles.container}>
            <Feather name="map-pin" size={18} color="gray" />
            <Text style={styles.deliver}>Deliver to XYZ - Mumbai 400079</Text>
            <MaterialIcons name="keyboard-arrow-down" size={24} color="gray" />
        </View>
    </View>
  )
}

export default SubHeader

const styles = StyleSheet.create({
    container: {
        padding: 13,
        flexDirection: 'row',
        alignItems: 'center',
      },
      deliver: {
        fontSize: 13,
        color: '#2c4341',
        paddingHorizontal: 6,
      },
})