import React, { Component } from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';

function BookDetails({ navigation, route }) {

  const {book, bookList} = route.params;

  return (
    <View style={{ flex: 1 }}>
      <GestureRecognizer config={{ velocityThreshold: 0.1, directionOffsetThreshold: 300}} onSwipe={(direction, state) => swipeHandler(state, navigation, book, bookList)} style={{ flex: 1 }}>
        <View style={{ flex: 1, backgroundColor: "#C5CBD3"}}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', textAlign: 'center', margin: 20, color: "#0A2463"}}>{ book.title.toUpperCase() }</Text>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', alignContent: 'center'}}>
            <Text style={{ fontSize: 20, margin: 20}}><Text style={{ color: "#BB342F" }}>Category:</Text> { book.category.toUpperCase() }</Text>
            <Text style={{ fontSize: 20, margin: 20}}><Text style={{ color: "#BB342F" }}>Reference:</Text> { book.reference.toUpperCase() }</Text>
            <Text style={{ fontSize: 20, margin: 20}}><Text style={{ color: "#BB342F" }}>Writting date:</Text> { book.writtingDate.toUpperCase() }</Text>
            <Text style={{ fontSize: 20, margin: 20}}><Text style={{ color: "#BB342F" }}>Edition date:</Text> { book.editionDate.toUpperCase() }</Text>
          </View>
        </View>
      </GestureRecognizer>

      <View style={{ position: 'absolute', bottom: 0, width: "100%"}}>
        <Button style={{ alignSelf: 'center'}} title={"Home"} onPress={() => { navigation.navigate("Home") }}></Button>
      </View>
    </View>
  );
}

function swipeHandler(state, navigation, actualBook, bookList)
{
  if (Math.abs(state.dx) > Math.abs(state.dy))//SWIPE HORIZONTAL
  {
    if (state.dx < 0) //SWIPE RIGHT
    {
      // console.log("swipe right");
      bookList.forEach((book, i) => {
        if (book.id === actualBook.id)
        {
          let next;
          if (i === bookList.length-1) next = 0;
          else next = i+1;
          navigation.navigate("BookDetails", { book: bookList[next], bookList: bookList });
          return;
        }
      });
    }
    else //SWIPE LEFT
    {
      // console.log("swipe left");
      bookList.forEach((book, i) => {
        if (book.id === actualBook.id)
        {
          let previous;
          if (i === 0) previous = bookList.length-1;
          else previous = i-1;
          navigation.navigate("BookDetails", { book: bookList[previous], bookList: bookList });
          return;
        }
      });
    }
  }
  else //SWIPE VERTICAL
  {
    if (state.dy < 0) //SWIPE UP
    {
      // console.log("swipe up");
    }
    else //SWIPE DOWN
    {
      // console.log("swipe down");
    }
  }
}



const styles = StyleSheet.create({

})

export default BookDetails;
