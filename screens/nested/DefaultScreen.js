import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function DefaultScreen({ route }) {
const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
  
  // console.log(route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  console.log(posts);

  return (
    <>
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={posts}
          keyExsractor={Math.random().toString(12).substring(0)}
          // keyExsractor={(item, index) => index.toString()}
          renderItem={({ item: {photo, postData}}) => (
            <View>
            <Image source={{ uri: photo }} style={styles.image} />
            <Text style={styles.title}>{postData.namePost}</Text>
            <View style={styles.detalis}> 
            {/* <View>
                    <Image />
                    <Text></Text>
                </View> */}
                <View>
                {/* <Image /> */}
                    <Text style={styles.location}>{postData.location}</Text>
                </View>
            </View>           
            </View>
          )}
        />
        <Button title="go to map" onPress={()=> {navigation.navigate("Map")}} />
        <Button title="go to comments" onPress={()=> {navigation.navigate("Comments")}} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems:"center",
  },
  list: {
    // marginTop: 124,
    gap: 34,
  },
  image: {
    width: 343,
    height: 240,
    borderRadius: 8,
    marginBottom: 8,
  },
  title: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    marginBottom: 11,
  },
  detalis: {
    justifyContent: "space-between",
    marginBottom: 34,
  },
  location: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
