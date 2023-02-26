import React from "react";
import { Text, View } from "react-native";

var name ="avinash";
var age=52;
const PrintDetail = ()=>{
    return(
    <View>
    <Text style={{fontSize:80}}> Name : {name}</Text>
    <Text style={{fontSize:80}}> Age : {age}</Text>
    </View>
    )
  }

export default PrintDetail;