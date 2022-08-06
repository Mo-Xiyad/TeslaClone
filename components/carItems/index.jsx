import React from 'react'
import { View, Text, ImageBackground } from "react-native";
import styles from './styles.js';
const  carItem= (props)=> {
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/ModelS.jpeg")}
        style={styles.image}
      />
      <View style={styles.tittles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Price: $35,000</Text>
      </View>
    </View>
  );
}
export default carItem;