import { Players } from "../types";

import { PLAYER_O, PLAYER_X } from "@/config/constants";

export function takeOpposite(player: Players) {
  return player === PLAYER_X ? PLAYER_O : PLAYER_X;
}
