import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Start = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.mc}>HOLA ORLANDO</Text>
      </View>
      <View style={{alignItems:"center",justifyContent:"center"}} >
        <Text>
          Estas son tus rutas
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#FFFFFF"
  },
  header: {
    height: 150,
    backgroundColor: "#000000",
    justifyContent:"center",
  },
  mc: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    fontStyle: "italic",
    marginLeft:"10%"
  },
})

export default Start