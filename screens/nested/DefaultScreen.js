import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Button } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function DefaultScreen({ route }) {
const navigation = useNavigation();
  const [posts, setPosts] = useState([]);
   // console.log(posts);

  const takeMap = () => {
    // console.log(route.params.coords)
    const currentCoords = {"latitude": route.params.coords.latitude, "longitude": route.params.coords.longitude}
    navigation.navigate("Map",  {currentCoords})
  }

  const takeComments = () => {
    navigation.navigate("Comments")
 }  
  // console.log(route.params);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

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
              <View style={styles.detalisWrap}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={takeComments}
                >
                  <Image source={require("../../assets/image/message-circle.png")}/> 
                </TouchableOpacity>
                  <Text>0</Text>
              </View>
              <View style={styles.detalisWrap}>
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={takeMap}
                >
                  <Image source={require("../../assets/image/map-pin.png")}/>
                </TouchableOpacity>
                  <Text style={styles.detalisLocation}>{postData.location}</Text>
              </View>
            </View>           
            </View>
          )}
        />
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
    flexDirection: "row",
    marginBottom: 34,
  },
  detalisWrap: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8
  },
  detalisLocation: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    color: "#212121",
    textDecorationLine: "underline",
  },
});
