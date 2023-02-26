import React from "react";
import { Text, View ,Button,Alert,StyleSheet,Separator} from "react-native";

var name ="avinash";
var age=52;
const fruit=(val)=>{
    Alert.alert(val)
}

const ButtonComponent = ()=>{
    return(

    <View style={styles.buttonBox}>
    <Button 
    title="Left"
    color="#841584"
    onPress={() => fruit("Hello")}
    // onPress={ fruit}
    // disabled
    />

    <Button 
    title="Right"
    color="#841584"
    onPress={() => Alert.alert('Simple Button pressed')}
    />
    </View>
    )
  }

  const styles=StyleSheet.create({
   
    buttonBox:{
        flexDirection: 'row',
        justifyContent:"space-between"
    }
  })

export default ButtonComponent;