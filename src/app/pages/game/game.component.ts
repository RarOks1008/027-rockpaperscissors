import { style, transition, trigger, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ComputerPlayOption, PlayOptions, isPlayerLosing, isPlayerWinning } from 'src/app/models/PlayOptions';
import { PlaySignal } from 'src/app/models/PlaySignal.interface';
import { Score } from 'src/app/models/Score.interface';
import { ScoreService } from 'src/app/services/score.service';
import { HandType, HandTypeExtended } from 'src/app/types/Hand.type';
import { GameMode, GameModeOptions, PlayMode, PlayModeOptions } from 'src/app/types/Mode.type';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  animations: [
    trigger('fade', [      
      transition('void => active', [
        style({opacity: 0}),
        animate(1000, style({opacity: 1}))
      ]),
      transition('* => void', [
        animate(1000, style({opacity: 0}))
      ])
    ])

]
})
export class GameComponent implements OnInit {
  gameMode: GameMode | null;
  playMode: PlayMode;
  playerOptions: PlayOptions;
  time: number = 0;
  computerSelected: PlaySignal;
  clickable: boolean = true;
  score: Score;

  computerOption: ComputerPlayOption;

  constructor(private _route: ActivatedRoute, private _router: Router, private _scoreService: ScoreService) {}

  ngOnInit() {
    const gm = this._route.snapshot.queryParamMap.get('gamemode') as GameMode;
    const pm = this._route.snapshot.queryParamMap.get('playmode') as PlayMode;

    if (!gm || !this.isOfTypeGameMode(gm) || !pm || !this.isOfTypePlayMode(pm)) {
      this._router.navigate(['']);
    }

    this.gameMode = gm;
    this.playMode = pm;

    this.playerOptions = new PlayOptions(gm);
    this.computerOption = new ComputerPlayOption(gm);

    this.score = this._scoreService.getScore();
  }

  isOfTypeGameMode(gm: string): gm is GameMode {
    return GameModeOptions.includes(gm);
  }

  isOfTypePlayMode(pm: string): pm is PlayMode {
    return PlayModeOptions.includes(pm);
  }

  selectSignal(po: HandType | HandTypeExtended): void {
    if (!this.clickable || this.playMode === 'cvc') {
      return;
    }
    this.clickable = false;
    this.playerOptions.signals = this.playerOptions.signals.map(p =>
      p.name !== po
        ? { ...p, status: 'inactive' }
        : p
    );

    this.computerOption = { ...this.computerOption, status: 'inactive' };

    const isWinning = isPlayerWinning(po, this.computerOption.name);
    const isLosing = isPlayerLosing(po, this.computerOption.name);

    if (isWinning || isLosing) {
      this._scoreService.setScore(isWinning, true);
    }

    this.refreshPage();
  }

  start(): void {
    let rand = Math.floor(Math.random() * this.playerOptions.signals.length);
    this.playerOptions.signals = this.playerOptions.signals.map(p =>
      p.name !== this.playerOptions.signals[rand].name
        ? { ...p, status: 'inactive' }
        : p
    );

    this.computerOption = { ...this.computerOption, status: 'inactive' };

    const isWinning = isPlayerWinning(this.playerOptions.signals[rand].name, this.computerOption.name);
    const isLosing = isPlayerLosing(this.playerOptions.signals[rand].name, this.computerOption.name);

    if (isWinning || isLosing) {
      this._scoreService.setScore(isWinning, false);
    }

    this.refreshPage();
  }

  refreshPage(): void {
    setTimeout(() => {
      this._router.navigate(
        ['/game'],
        {
          queryParams: {
            gamemode: this.gameMode,
            playmode: this.playMode
          }
        }
      );
    }, 1200);
  }
}
