import { StyleSheet, Text } from "react-native";
import { Coordinate } from "../types/GestureEventType";
function getRandomFruitsEmoji() {
  const fruitsEmojis = ["🍎", "🍊", "🍋", "🍇", "🍉", "🍓", "🍑", "🍍"];
  const randomIndex = Math.floor(Math.random() * fruitsEmojis.length);
  return fruitsEmojis[randomIndex];
}
let currentFruit = getRandomFruitsEmoji();

export default function Food({ x, y }: Coordinate): JSX.Element {
  return (
    <Text style={[{ top: y * 10, left: x * 10 }, styles.food]}>
      {currentFruit}
    </Text>
  );
}

const styles = StyleSheet.create({
  food: {
    width: 20,
    height: 20,
    borderRadius: 7,
    position: "absolute",
  },
});
