import React from "react";
import {Text,View,StyleSheet} from 'react-native';
import { Colors } from "react-native/Libraries/NewAppScreen";

const styling=()=>{
    return(
        <View>
            <Text style={{marginTop:50}}> this is inline styling </Text>
            <Text style={style.internal}> Internal Styling </Text>
        </View>
    )
}

const style=StyleSheet.create({
    internal:{
        backgroundColor:'black',
        color:'white',
        fontWeight:"bold",
        fontSize:40
    }
})
export default styling;