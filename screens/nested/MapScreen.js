import { StyleSheet, Text, View } from "react-native";

export default function MapScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>MapScreen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.72,
    color: "#FF6C00",
  },
});
