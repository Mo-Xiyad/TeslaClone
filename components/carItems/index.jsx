import React from 'react'
import { View, Text, ImageBackground } from "react-native";
import styles from './styles.js';
import StyledButton from '../StyledButton';
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
      <StyledButton 
      type={"primary"}
      content={"Custom Order"} 
      onPress={()=> {
        console.warn("Custom Order was pressed");
      }} />
      <StyledButton 
      type={"secondary"}
      content={"Existing Inventory"} 
      onPress={()=> {
        console.warn("Existing Inventory was pressed");
      }} />
    </View>
  );
}
export default carItem;