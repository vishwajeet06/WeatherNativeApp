import React from "react";
import { StyleSheet, View } from "react-native";

function Weather() {
  return <View style={styles.container}></View>;
}

export default Weather;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
  },
});
