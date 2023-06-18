import { Injectable } from '@angular/core';
import { Score } from '../models/Score.interface';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  setScore(isWin: boolean, isPlayer: boolean): void {
    const score = localStorage.getItem('score');
    let myScore: Score;
    if (score) {
      myScore = JSON.parse(score);
      if (isPlayer) {
        isWin ? myScore.player.wins++ : myScore.player.loses++;
      } else {
        isWin ? myScore.computer.wins++ : myScore.computer.loses++;
      }
    } else {
      myScore = {player: { wins: 0, loses: 0 }, computer: { wins: 0, loses: 0 }}
      if (isPlayer) {
        isWin ? myScore.player.wins++ : myScore.player.loses++;
      } else {
        isWin ? myScore.computer.wins++ : myScore.computer.loses++;
      } 
    }
    localStorage.setItem('score', JSON.stringify(myScore));
  }

  getScore(): Score {
    const score = localStorage.getItem('score');
    let myScore: Score;
    if (score) {
      myScore = JSON.parse(score);
    } else {
      myScore = {player: { wins: 0, loses: 0 }, computer: { wins: 0, loses: 0 }}
    }
    return myScore;
  }
}
