import React from "react";
import { View, Text, ImageBackground } from "react-native";
import styles from "./styles.js";
import StyledButton from "../StyledButton";
const carItem = ({ name, tagline, taglineCTA, image }) => {
  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />
      <View style={styles.tittles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagline} <Text style={styles.subtitleCTA}>{taglineCTA}</Text>
        </Text>
      </View>

      <View style={styles.buttonsContainer}>
        <StyledButton
          type={"primary"}
          content={"Custom Order"}
          onPress={() => {
            console.warn("Custom Order was pressed");
          }}
        />
        <StyledButton
          type={"secondary"}
          content={"Existing Inventory"}
          onPress={() => {
            console.warn("Existing Inventory was pressed");
          }}
        />
      </View>
    </View>
  );
};
export default carItem;
