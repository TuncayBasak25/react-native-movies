import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './app/screens/Home';
import BookList from './app/screens/BookList';
import BookDetails from './app/screens/BookDetails';

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator
       screenOptions={{
         headerTitleAlign: 'center',
         headerStyle: {
           backgroundColor: '#621FF7',
         },
         headerTintColor: '#fff',
         headerTitleStyle :{
           fontWeight: 'bold',
         },
       }}
     >
     <Stack.Screen
       name="Home"
       component={Home}
       options={{ title: 'Home' }}
     />
     <Stack.Screen
       name="BookList"
       component={BookList}
       options={{ title: 'Book list' }}
     />
     <Stack.Screen
      name="BookDetails"
      component={BookDetails}
      options={{ title: 'Book Detail' }}
     />
   </Stack.Navigator>
    </NavigationContainer>
  );
}
