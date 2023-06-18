import { useEffect, useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

export default function PostsScreen({route}) {
const [posts, setPosts] = useState([]);
console.log(route.params)

useEffect(() => {
if(route.params) {
  setPosts((prevState) => [...prevState, route.params])
}
}, [route.params])

console.log(posts)

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>PostsScreen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent:"center",
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
