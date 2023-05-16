import { PropsWithChildren } from "react";

import { TicTacToeProvider } from "@/contexts/tic-tac-toe";

export function Providers({ children }: PropsWithChildren<unknown>) {
  return <TicTacToeProvider>{children}</TicTacToeProvider>;
}
