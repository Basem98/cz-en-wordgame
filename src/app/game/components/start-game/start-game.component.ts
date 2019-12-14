import { Component } from '@angular/core';
import { Word } from '../../../interfaces/word';
import { GameService } from 'src/app/services/game.service';
import { MatDialog } from '@angular/material/dialog';
import { GameBoxComponent } from '../game-box/game-box.component';

@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent {
  randomWords: Array<Word>;

  constructor(
    private gameService: GameService,
    private dialog: MatDialog
    ) { }

  async onStartCzechGame() {
    this.randomWords = await this.gameService.getWordsForGame('cz');
    if (this.randomWords) {
      this.dialog.open(GameBoxComponent, {
        width: '700px',
        disableClose: true,
        data: this.randomWords
      });
    }
  }

  async onStartEnglishGame() {
    this.randomWords = await this.gameService.getWordsForGame('en');
    if (this.randomWords) {
      this.dialog.open(GameBoxComponent, {
        width: '700px',
        disableClose: true,
        data: this.randomWords
      });
    }
  }

}
