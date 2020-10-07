import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';


function Home({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home screen</Text>
      <Button title={"Book list"} onPress={() => { navigation.navigate("BookList") }}></Button>
    </View>
  );
}

export default Home;
