import React from "react";
import { Text, StyleSheet, Button } from "react-native";
const HomeScreen = props => {
  return <Text style={styles.text}>Hello World</Text>;
  
  <Button

  onPress = {​​()=> props.navigation.navigate('Chat')}​​
  
  title = "Go to Chat Screen"
  
  />
};



const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default HomeScreen;
