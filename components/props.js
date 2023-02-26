import React, { useState } from "react";
import { Button, Text, View } from "react-native";

const Props = (props) => {
  var name = "chandu";
  
  return (
    <View style={{ backgroundColor: "green", padding: 5, marginTop:50,  }}>
      <Text style={{ color: "black" }}> {props.name}</Text>
      
    </View>
  );
};

export default Props;
