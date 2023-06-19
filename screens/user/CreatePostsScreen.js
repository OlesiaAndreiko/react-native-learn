import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
// import {TouchableOpacity} from "react-native-gesture-handler"
import { Camera } from "expo-camera";
import {} from "expo-media-library";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import * as Location from 'expo-location';

const initalState = {
  namePost: "",
  location: "",
};

export default function CreatePostsScreen() {
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [postData, setPostData] = useState(initalState);
  const [isCreatePhoto, setIsCreatePhoto] = useState(false); // for button color
  const [isCreateTitle, setIsCreateTitle] = useState(false); // for button color
  const [isCreateLocation, setIsCreateLocation] = useState(false); // for button color
  // const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const navigation = useNavigation();
  const keyboardHide = () => {Keyboard.dismiss()};

  const addTitlePhoto = (value) => {
  setIsCreateTitle(true);
  setPostData((prevState) => ({ ...prevState, namePost: value }));
  };

  const addLocation = (value) => {
    setIsCreateLocation(true);
    setPostData((prevState) => ({ ...prevState, location: value }));
    };

  const takeMap = () => {
    navigation.navigate("Map")
  }

  const takePhoto = async () => {
    const photo = await cameraRef.takePictureAsync();
    
    setPhoto(photo.uri);
    setIsCreatePhoto(true);
   
    // console.log("photo", photo);
   
    // await MediaLibrary.createAssetAsync(uri);
  };

  const sendPhoto = async () => {
    const location = await Location.getCurrentPositionAsync();
    const coords = {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
    // setLocation(coords);
    // console.log(coords);
    setPostData((prevState) => ({ ...prevState, coords: coords }));

    navigation.navigate("DefaultScreen", { photo, postData, coords, });

    setPostData(initalState);
    setIsCreatePhoto(false);
    setIsCreateTitle(false);
  };

 
  useEffect(() => {
    (async () => {      
      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        console.log(errorMsg);
        return;
      } 

      // let location = await Location.getCurrentPositionAsync({});
      // setLocation(location);
    })();
  }, []);

  // let text = 'Waiting..';
  // if (errorMsg) {
  //   text = errorMsg;
  // } else if (location) {
  //   text = JSON.stringify(location);
  // }
  return (    
      <TouchableWithoutFeedback onPress={keyboardHide}>
        <View style={styles.container}>
          <Camera style={styles.camera} ref={setCameraRef}>
            {photo && (
              <View style={styles.takePhotoWrap}>
                <Image
                  style={styles.takePhotoImage}
                  source={{ uri: photo }}
                ></Image>
              </View>
            )}
            <TouchableOpacity
              style={styles.buttonCamera}
              activeOpacity={0.5}
              onPress={takePhoto}
            >
              <Image source={require("../../assets/image/camera.png")}></Image>
            </TouchableOpacity>
          </Camera>
          <Text style={styles.textLoad}>
            {isCreatePhoto ? "Редагувати фото" : "Завантажте фото"}
          </Text>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              value={postData.namePost}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              maxLength={35}
              onChangeText={addTitlePhoto}
            />
            <View>
              <TextInput
              style={styles.inputMap}
              value={postData.location}
              placeholder="Місцевість......"
              placeholderTextColor="#BDBDBD"
              maxLength={35}
              onChangeText={addLocation}
             />
              <TouchableOpacity
                    style={styles.mapIcon}
                    activeOpacity={0.7}
                    onPress={takeMap}
                  >
                  <Image source={require("../../assets/image/map-pin.png")}/>
              </TouchableOpacity>
            </View>            
            <TouchableOpacity
              style={{
                ...styles.button,
                backgroundColor: isCreatePhoto && isCreateTitle && isCreateLocation ? "#FF6C00" : "#F6F6F6",
              }}
              activeOpacity={0.7}
              onPress={sendPhoto}
            >
              <Text
                style={{
                  ...styles.buttonTitle, color: isCreatePhoto && isCreateTitle && isCreateLocation ? "#FFFFFF" : "#BDBDBD",
                }}
              >
                Опубліковати
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback> 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 32,
    alignItems: "center",
  },
  camera: {
    width: 343,
    height: 240,

    alignItems: "center",
    justifyContent: "center",
    // overflow: "hidden",

    border: 50,
    borderRadius: 10,
    // borderColor: "#E8E8E8",
    // backgroundColor: "#F6F6F6",

    marginBottom: 32,
  },
  buttonCamera: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
  },
  icon: {
    width: 20,
    height: 18,
  },

  takePhotoWrap: {
    position: "absolute",
    top: -3,
    left: -3,
  },
  takePhotoImage: {
    width: 349,
    height: 245,
    borderRadius: 10,
  },

  textLoad: {
    width: 343,
    textAlign: "left",
    marginTop: -20,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    color: Platform.OS === "ios" ? "red" : "#BDBDBD",
  },
  form: {
    paddingTop: 32,
    gap: 32,
  },
  mapWrap: {

  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingTop: 15,
    paddingBottom: 15,
    color: "#212121",
    height: 50,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  mapIcon:{
    borderColor: "red",
    position: "absolute",
    top: 10,
    left: 0,
  },
  inputMap: {
    borderBottomWidth: 1,
    borderBottomColor: "#E8E8E8",
    paddingLeft: 30,
    paddingTop: 15,
    paddingBottom: 15,
    color: "#212121",
    height: 50,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
  },
  button: {
    height: 50,
    width: 343,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 100,
    marginTop: 16,
    ...Platform.select({
      ios: {
        backgroundColor: "transparent",
        borderColor: "#FF6C00",
      },
      android: {
        backgroundColor: "#F6F6F6",
        borderColor: "transparent",
      },
    }),
  },
  buttonTitle: {
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    color: Platform.OS === "ios" ? "#FF6C00" : "#BDBDBD",
  },
});

// import React, { useState, useEffect, useRef } from "react";
// import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
// import { Camera } from "expo-camera";
// import * as MediaLibrary from "expo-media-library";

// export default function CreatePostsScreen() {
//   const [hasPermission, setHasPermission] = useState(null);
//   const [cameraRef, setCameraRef] = useState(null);
//   const [type, setType] = useState(Camera.Constants.Type.back);

//   useEffect(() => {
//     (async () => {
//       const { status } = await Camera.requestCameraPermissionsAsync();
//       await MediaLibrary.requestPermissionsAsync();

//       setHasPermission(status === "granted");
//     })();
//   }, []);

//   if (hasPermission === null) {
//     return <View />;
//   }
//   if (hasPermission === false) {
//     return <Text>No access to camera</Text>;
//   }

//   return (
//     <View style={styles.container}>
//       <Camera
//         style={styles.camera}
//         type={type}
//         ref={setCameraRef}
//       >
//         <View style={styles.photoView}>
//           <TouchableOpacity
//             style={styles.flipContainer}
//             onPress={() => {
//               setType(
//                 type === Camera.Constants.Type.back
//                   ? Camera.Constants.Type.front
//                   : Camera.Constants.Type.back
//               );
//             }}
//           >
//             <Text style={{ fontSize: 18, marginBottom: 10, color: "white" }}>
//               {" "}
//               Flip{" "}
//             </Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={async () => {
//               if (cameraRef) {
//                 const { uri } = await cameraRef.takePictureAsync();
//                 await MediaLibrary.createAssetAsync(uri);
//               }
//             }}
//           >
//             <View style={styles.takePhotoOut}>
//               <View style={styles.takePhotoInner}></View>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </Camera>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1 },
//   camera: {
//         width: 343,
//         height: 240,
//         alignItems:"center",
//         justifyContent:"center",

//         border: 1,
//         borderRadius: 8,
//         borderColor: "#E8E8E8",
//         backgroundColor: "#F6F6F6",
//     //     // backgroundColor: "transparent",
//       },
//   photoView: {
//     flex: 1,
//     backgroundColor: "transparent",
//     justifyContent: "flex-end",
//   },

//   flipContainer: {
//     flex: 0.1,
//     alignSelf: "flex-end",
//   },

//   button: { alignSelf: "center" },

//   takePhotoOut: {
//     borderWidth: 2,
//     borderColor: "white",
//     height: 50,
//     width: 50,
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 50,
//   },

//   takePhotoInner: {
//     borderWidth: 2,
//     borderColor: "white",
//     height: 40,
//     width: 40,
//     backgroundColor: "white",
//     borderRadius: 50,
//   },
// });
