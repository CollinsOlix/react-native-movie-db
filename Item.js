import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";
const Item = (props) => {
  return (
    <TouchableOpacity>
      <View
        style={{
          width: 140,
          height: 250,
          borderRadius: 7,
          margin: 15,
          backgroundColor: "blue",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Image
          source={require("./assets/icon.png")}
          style={{
            width: 120,
            height: 250,
            aspectRatio: "3/5",
            resizeMode: "cover",
            flex: 1,
            position: "relative",
            zIndex: 1,
          }}
        />
        <Text
          style={{
            position: "absolute",
            bottom: 0,
            zIndex: 2,
            textAlign: "center",
          }}
        >
          {props.title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Item;
