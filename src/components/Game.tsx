import { StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import { Colors } from "../styles/colors";
import { PanGestureHandler } from "react-native-gesture-handler";
import { GestureEventType } from "../types/GestureEventType";

const Game = (): JSX.Element => {
  const handleGesture = (event: GestureEventType) => {
    const { translationX, translationY } = event.nativeEvent;
    // console.log(translationX, translationY);
    // use this to understand co-ordinates
    if (Math.abs(translationX) > Math.abs(translationY)) {
      // moving on the x-axis
      if (translationX > 0) {
        //this means we are moving to RIGHT on the x-axis
      } else {
        //this means we are moving to LEFT on the x-axis
      }
    } else {
      // moving on the y-axis
      if (translationY > 0) {
        //this means we are moving DOWN on the y-axis
      } else {
        //this means we are moving to the UP on the y-axis
      }
    }
  };
  return (
    <PanGestureHandler onGestureEvent={handleGesture}>
      <SafeAreaView style={styles.container}></SafeAreaView>
    </PanGestureHandler>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});
export default Game;
