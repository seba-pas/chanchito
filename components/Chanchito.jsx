import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Chanchito = (props) => {
  return (
    <View style={styles.container}>
      <Text>Chanchito</Text>
    </View>
  )
}

export default Chanchito

const styles = StyleSheet.create({
    container: {
        width: '80%',
        backgroundColor: 'blue'
    }
})