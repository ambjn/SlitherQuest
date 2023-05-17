import { Coordinate } from "../types/GestureEventType";

export const randomFruitPosition = (maxX: number, maxY: number): Coordinate => {
    return {
        x: Math.floor(Math.random() * maxX),
        y: Math.floor(Math.random() * maxY),
    };
};