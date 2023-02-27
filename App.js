import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import PrintDetail from './components/detail';
import ButtonComponent from './components/button';
import State from './components/state';
import Props from './components/props';
import Styling from './components/styling';
import Input from './components/input';
import TaskFirst from './components/taskFirst';

export default function App() {
  const [data,setData] = useState('My name is avinash')
  return (
    <View >
    {/* component section */}
      {/* <PrintDetail/>
      <ButtonComponent/>
      <State/> */}
      {/* <Props name={data}/> 
      <Button title="press me" onPress={()=>{
        setData('ram')
      }}/> */}
    {/* <Styling/> */}
    {/* <Input/> */}
    {/* <TaskFirst/> */}

    {/* navigation section */}
    
    </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'  },
});
