import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

var name ="avinash"
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:80}}>ram  </Text>
      <Text style={{fontSize:40}}> Sham</Text>
      <Button title='click'></Button>
      <Button title='="click2' ></Button>
      <Text>{name}</Text>

      <StatusBar style="auto" />
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
