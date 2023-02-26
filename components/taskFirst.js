import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  BackHandler,
  TextInput,
} from "react-native";

export default function taskFirst() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address:"",
    mobile:"",
    message: "",
  });

  const [showForm, setShowFrom] = useState(true);
  const [showDetail,setShow] = useState(false);

    //send data after click the submit button
  function handleSubmit(){
    setShowFrom(false)
    setShow(true);
  }
  return (
    <>
    
      <View style={{ marginTop: 50 }}>
     
        <Text style={styles.heading}>Contact Us</Text>
        {/* Input Section */}
    {
    showForm ? 
        <View>
          <TextInput
            style={styles.input}
            placeholder="Enter the Name"
            value={formData.name}
            onChangeText={text => setFormData({...formData, name: text})}

          />

          <TextInput
            style={styles.input}
            placeholder="Email"
            value={formData.email}
            keyboardType="email-address"
            onChangeText={text => setFormData({...formData, email: text})}

          />

          <TextInput
            style={styles.input}
            placeholder="Address"
            value={formData.address}
            onChangeText={text => setFormData({...formData, address: text})}

          />

          <TextInput
            style={styles.input}
            placeholder="Enter the Mobile"
            keyboardType="numeric"
            value={formData.mobile}
            onChangeText={text => setFormData({...formData, mobile: text})}

          />
          <TextInput
            style={styles.input}
            placeholder="Enter the Message"
            value={formData.message}
            onChangeText={text => setFormData({...formData, message: text})}

          />
       

        {/* Button Section */}
        <View style={styles.button}>
          <Button title="Submit" onPress={handleSubmit} />
        </View>
        </View>
    :null
    }
        <View>
            {
            showDetail ? 
                <View>
                    <Text> Name : {formData.name}</Text>
                    <Text> Email : {formData.email}</Text>
                    <Text> Address : {formData.address}</Text>
                    <Text> Mobile : {formData.mobile}</Text>
                    <Text> Message : {formData.message}</Text>
                </View>
            :null
            }
        </View>
      </View>
      
    </>
  );
}

const styles = StyleSheet.create({
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
  },
  input: {
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  button: {
    marginTop: "70%",
    padding: 20,
  },
});
