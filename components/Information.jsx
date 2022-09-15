import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Information = () => {
const [dinero, setDinero] = useState(200)


  return (
    <View>
      <Text>Dinero disponible</Text>
      <Text>${dinero}</Text>
    </View>
  )
}

export default Information

const styles = StyleSheet.create({})