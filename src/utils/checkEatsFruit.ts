import { Coordinate } from "../types/GestureEventType";

export const checkEatsFruit = (
    head: Coordinate, food: Coordinate, area: number
): boolean => {
    const distanceBetweenFoodAndSnakeX: number = Math.abs(head.x - food.x);
    const distanceBetweenFoodAndSnakeY: number = Math.abs(head.y - food.y);
    return (
        distanceBetweenFoodAndSnakeX < area && distanceBetweenFoodAndSnakeY < area
    );
}