import { StyleSheet, View, Text, TextInput, Image, TouchableOpacity } from "react-native";
// import {TouchableOpacity} from "react-native-gesture-handler"
import { Camera } from "expo-camera";
// import camera from "../../assets/image/camera.svg"
// import { Ionicons } from '@expo/vector-icons';
import {} from "expo-media-library";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const initalState = {
  namePost: "",
};

export default function CreatePostsScreen() {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [postData, setPostData] = useState(initalState);

  const navigation = useNavigation();

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();
    setPhoto(photo.uri);
    
    console.log("photo", photo);
    // await MediaLibrary.createAssetAsync(uri);
  };

  const sendPhoto = () => {
    navigation.navigate("PostsScreen", { photo, postData });
    setPostData(initalState)
  };

  return (
    <>
      <View style={styles.container}>
        <Camera style={styles.camera} ref={setCamera}>
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
        
        <View style={styles.form}>
       <Text style={styles.textLoad}>Завантажте фото</Text>
       
        <TextInput
                  style={{
                    ...styles.input,
                    // borderColor: isActiveEmail ? "#FF6C00" : "#E8E8E8",
                  }}
                  value={postData.namePost}
                  placeholder="Назва..."
                  placeholderTextColor="#BDBDBD"
                  maxLength={35}
                  // onFocus={handleActiveEmail}
                  // onBlur={handleBlurEmail}
                  onChangeText={(value) =>
                    setPostData((prevState) => ({ ...prevState, namePost: value }))
                  }
                />
         
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.7}
            onPress={sendPhoto}
          >
            <Text style={styles.buttonTitle}>Опубліковати</Text>
          </TouchableOpacity>
        </View>
        {/* <Text style={styles.title}>CreatePostsScreen</Text> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // width: "100%",
    paddingTop: 32,

    // alignSelf: "center",
    alignItems: "center",
    // justifyContent:"center",
  },

  // title: {
  //   fontFamily: "Roboto-Medium",
  //   fontSize: 30,
  //   lineHeight: 35,
  //   textAlign: "center",
  //   letterSpacing: 0.72,
  //   color: "#FF6C00",
  // },
  camera: {
    width: 343,
    height: 240,

    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",

    border: 2,
    borderRadius: 10,
    borderColor: "#E8E8E8",

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
    top: 0,
    left: 0,
    // borderWidth: 2,
    // borderColor: "white",
    // borderRadius:10
  },
  takePhotoImage: {
    width: 343,
    height: 240,
    borderRadius: 10,
  },
  
  textLoad:{
    marginTop: -20,
    fontSize: 16,
    lineHeight: 19,
    fontFamily: "Roboto-Regular",
    color: Platform.OS === "ios" ? "red" : "#BDBDBD",
    // textAlign: 'left'
  },
  form: {
    gap: 32,
  },
  input:{
    borderBottomWidth:1,
    borderBottomColor: '#E8E8E8',
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
    // marginHorizontal: 16,
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
