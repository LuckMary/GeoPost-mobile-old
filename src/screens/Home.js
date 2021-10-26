import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

const Home = () => {
  return (
    <View style={styles.home}>
      <TouchableOpacity style={styles.button} activeOpacity={0.5}>
        <Text>View me on map</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  home: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  button: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    flexDirection: 'row',
    borderRadius: 15,
    borderStyle: 'solid',
    borderWidth: 1
  }
})

export default Home
