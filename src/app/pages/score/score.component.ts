import { Component, OnInit } from '@angular/core';
import { Score } from 'src/app/models/Score.interface';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  score: Score;

  constructor(private _scoreService: ScoreService) {}

  ngOnInit(): void {
    this.score = this._scoreService.getScore();
  }
}
