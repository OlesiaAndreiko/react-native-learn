// import { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import MapView, { Marker } from "react-native-maps";

export default function MapScreen({ route }) {
  //  console.log(route.params);

  return (
    <>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          // initialRegion={{
          //   latitude: 62.0091,
          //   longitude: -6.7744,
          //   latitudeDelta: 0.00922,
          //   longitudeDelta: 0.00421,
          //   // 50.4317837,30.5983631
          // }}
          region={{
            latitude: route.params.currentCoords.latitude,
            longitude: route.params.currentCoords.longitude,
            latitudeDelta: 0.922,
            longitudeDelta: 0.421,
          }}
          showsMyLocationButton={true}
          mapType="standard"
          // minZoomLevel={15}
          onMapReady={() => console.log("Map is ready")}
          onRegionChange={() => console.log("Region change")}
          // latitude: 62.0091,
          // longitude: -6.7744,
        >
          <Marker
            coordinate={{
            latitude: route.params.currentCoords.latitude,
            longitude: route.params.currentCoords.longitude,
            }}
            title="travel photo"
            description="Hello"
            pinColor="#FF6C00"
            showCallout={true}
          />
        </MapView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  map: {
    flex: 1,
  },
  // title: {
  //   fontFamily: "Roboto-Medium",
  //   fontSize: 30,
  //   lineHeight: 35,
  //   textAlign: "center",
  //   letterSpacing: 0.72,
  //   color: "#FF6C00",
  // },
});
