import { createContext } from "react";

import { TicTacToeContextData } from "./types";

export const TicTacToeContext = createContext<TicTacToeContextData | undefined>(
  undefined
);
