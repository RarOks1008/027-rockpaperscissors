import { HandType } from "../types/Hand.type";

export interface Play {
    type: HandType;
    winsAgainst: HandType[];
    losesAgainst: HandType[];
}