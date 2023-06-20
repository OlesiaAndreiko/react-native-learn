import { StyleSheet, Text, View } from "react-native";

export default function CommentsScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>CommentsScreen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
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
