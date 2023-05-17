import { StyleSheet, View } from "react-native";
import React, { Fragment } from "react";
import { Coordinate } from "../types/GestureEventType";
import { Colors } from "../styles/colors";

interface SnakeProps {
  snake: Coordinate[];
}

const Snake = ({ snake }: SnakeProps): JSX.Element => {
  return (
    <Fragment>
      {snake.map((segment: Coordinate, index: number) => {
        const segmentStyle = {
          left: segment.x * 10, // +ve & -ve x-axis
          top: segment.y * 10, // +ve & -ve y-axis
        };
        return <View key={index} style={[styles.snake, segmentStyle]}></View>;
      })}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  snake: {
    width: 15,
    height: 15,
    backgroundColor: Colors.primary,
    borderRadius: 7,
    position: "absolute",
  },
});

export default Snake;
