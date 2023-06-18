import { HandType, HandTypeExtended, HandTypeExtendedOptions, HandTypeOptions } from "../types/Hand.type";
import { GameMode } from "../types/Mode.type";
import { PlaySignal } from "./PlaySignal.interface";
import { WinningOptions, WinningOptionsExtended } from "./WinningOptions";

export class PlayOptions {
    signals: PlaySignal[] = [];

    constructor(mode: GameMode) {
        switch (mode) {
            case 'rps':
                HandTypeOptions.forEach((el) => {
                    this.signals.push({name: el, image: el + '.svg', status: 'active'});
                });
                break;
            case 'rpsls':
                HandTypeExtendedOptions.forEach((el) => {
                    this.signals.push({name: el, image: el + '.svg', status: 'active'});
                });
        }
    }
}

export class ComputerPlayOption implements PlaySignal {
    name: HandType | HandTypeExtended;
    image: string;
    status: 'active' | 'inactive';

    constructor(mode: GameMode) {
        let rand: number;
        switch (mode) {
            case 'rps':
                rand = Math.floor(Math.random() * HandTypeOptions.length);
                this.name = HandTypeOptions[rand];
                this.image = HandTypeOptions[rand] + '.svg';
                this.status = 'active';
                break;
            case 'rpsls':
                rand = Math.floor(Math.random() * HandTypeExtendedOptions.length);
                this.name = HandTypeExtendedOptions[rand];
                this.image = HandTypeExtendedOptions[rand] + '.svg';
                this.status = 'active';
        }
    }
}

export function isPlayerWinning(ph: HandType | HandTypeExtended, ch: HandType | HandTypeExtended): boolean {
    return WinningOptionsExtended[ph].winning.includes(ch);
}

export function isPlayerLosing(ph: HandType | HandTypeExtended, ch: HandType | HandTypeExtended): boolean {
    return WinningOptionsExtended[ph].losing.includes(ch);
}