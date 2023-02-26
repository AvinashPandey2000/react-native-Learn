import React, { useState } from "react";
import {Button, Text,View} from 'react-native'

const State = ()=>{
    const [name,setname] =useState('avinash')
    function change(){
        setname("av")
    }
    return(
        <View>
            <Text>{name}</Text>
            <Button title="Change Name" onPress={change}/>
        </View>
    )
}

export default State;