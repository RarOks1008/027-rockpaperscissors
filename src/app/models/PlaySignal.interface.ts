import { HandType, HandTypeExtended } from "../types/Hand.type";

export interface PlaySignal {
    name: HandType | HandTypeExtended;
    image: string;
    status: 'active' | 'inactive';
}