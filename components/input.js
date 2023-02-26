import React, { useState } from "react";
import { Text, TextInput, View, StyleSheet, Button } from "react-native";

export default function input() {
  const [name, setName] = useState("");

  return (
    <>
      <Text style={{ fontSize: 30 }}> Your name is : {name}</Text>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={(Text) => setName(Text)}
        />
      </View>
      <Button title="clear data" onPress={() => setName("")}></Button>
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});
