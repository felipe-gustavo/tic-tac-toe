import { AxisY, AxisX } from "./Axises";
import { Players } from "./Players";

export type TicTacToeContextData = {
  reset(): void;
  play(axisX: AxisX, axisY: AxisY): void;
  turn: Players;
};
