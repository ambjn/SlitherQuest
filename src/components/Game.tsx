import { StyleSheet, SafeAreaView } from "react-native";
import React, { useState } from "react";
import { Colors } from "../styles/colors";
import { PanGestureHandler } from "react-native-gesture-handler";
import { Direction, GestureEventType } from "../types/GestureEventType";
import { Coordinate } from "../types/GestureEventType";

const SNAKE_INITIAL_POSITION = [{ x: 5, y: 5 }];
const FOOD_INITIAL_POSITION = { x: 5, y: 20 };
const GAME_BOUNDS = { xMin: 0, xMax: 35, yMin: 0, yMax: 63 };
const MOVE_INTERVAL = 50;
const SCORE_INCREMENT = 10;

const Game = (): JSX.Element => {
  const [direction, setDirection] = useState<Direction>(Direction.Right);
  const [snake, setSnake] = useState<Coordinate[]>(SNAKE_INITIAL_POSITION);
  const [food, setFood] = useState<Coordinate>(FOOD_INITIAL_POSITION);
  const [score, setScore] = useState<number>(0);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  const handleGesture = (event: GestureEventType) => {
    const { translationX, translationY } = event.nativeEvent;
    // console.log(translationX, translationY);
    // use this to understand co-ordinates
    if (Math.abs(translationX) > Math.abs(translationY)) {
      // moving on the x-axis
      if (translationX > 0) {
        //this means we are moving to RIGHT on the x-axis
        setDirection(Direction.Right);
      } else {
        //this means we are moving to LEFT on the x-axis
        setDirection(Direction.Left);
      }
    } else {
      // moving on the y-axis
      if (translationY > 0) {
        //this means we are moving DOWN on the y-axis
        setDirection(Direction.Down);
      } else {
        //this means we are moving to the UP on the y-axis
        setDirection(Direction.Up);
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
