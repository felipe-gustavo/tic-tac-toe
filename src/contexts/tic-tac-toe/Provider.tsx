import { PropsWithChildren, useCallback, useMemo, useState } from "react";

import { TicTacToeContext } from "./context";
import { AxisX, AxisY, Players } from "./types";
import { takeOpposite } from "./utils/takeOpposite";

export type TicTacToeProviderProps = PropsWithChildren<unknown>;

const INITIAL_PLAYER: Players = "X";

export function TicTacToeProvider({ children }: TicTacToeProviderProps) {
  const [turn, setTurn] = useState<Players>(INITIAL_PLAYER);
  const reset = useCallback(() => {}, []);

  const play = useCallback(
    (axisX: AxisX, axisY: AxisY) => {
      setTurn(takeOpposite(turn));
    },
    [turn]
  );

  return (
    <TicTacToeContext.Provider
      value={useMemo(
        () => ({
          turn,
          reset,
          play,
        }),
        [reset, play, turn]
      )}
    >
      {children}
    </TicTacToeContext.Provider>
  );
}
