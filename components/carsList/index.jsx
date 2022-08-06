import React from "react";
import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import CarItem from "../carItems";
import cars from "./cars.js";
const CarsList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList // FlatList is a component that renders a list of items
        data={cars} // data is an array of objects
        renderItem={({ item }) => (
          <CarItem // CarItem is a component that renders a single item
            name={item.name}
            tagline={item.tagline}
            taglineCTA={item.taglineCTA}
            image={item.image}
          />
        )}
        showsVerticalScrollIndicator={false} // hides the scroll indicator
        snapToAlignment="start" // aligns the list items to the start of the component (where the screen should start to display the list items)
        decelerationRate={"fast"} // deceleration rate is the speed at which the list items will stop moving
        snapToInterval={Dimensions.get("window").height} // snapToInterval is the distance between each list item
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

export default CarsList;
