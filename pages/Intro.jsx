import React from "react";
import { Image, StyleSheet, View } from "react-native";

export default function Intro() {
  const introBg = require("../assets/introBg.png");
  return (
    <View style={styles.container}>
      <Image source={require("../assets/logo.png")} style={styles.logo} />
      <Image
        source={introBg}
        style={{
          width: "100%",
          position: "absolute",
          zIndex: -10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    position: "absolute",
    top: 90,
    right: 32,
  },
});
