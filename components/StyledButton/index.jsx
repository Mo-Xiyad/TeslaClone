import React from "react";
import { View, Text, Pressable } from "react-native";
import styles from "./styles";
const styledButton = ({ type, onPress, content }) => {
  const backgroundColor = type === "primary" ? "#171A20cc" : "#FFFFFFA6";
  const textColor = type === "primary" ? "#FFFFFF" : "#171A20";
  // console.warn(type);
  return (
    <View style={styles.container}>
      <Pressable style={[styles.button, { backgroundColor }]} onPress={()=>onPress()}>
        <Text style={[styles.buttonText, { color: textColor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};
export default styledButton;
