import React from "react";
import { Text, StyleSheet, Button } from "react-native";
const ChatScreen = props => {
  return <Text style={styles.text}>Chat</Text>;

  <Button

  onPress = {​​()=> props.navigation.navigate('Chat')}​​
  
  title = "Go to Home Screen"
  
  />
};



const styles = StyleSheet.create({
  text: {
    fontSize: 50
  }
});

export default ChatScreen;
