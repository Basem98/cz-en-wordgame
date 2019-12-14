import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Word } from 'src/app/interfaces/word';
import { GameService } from 'src/app/services/game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  updatedScore: number;
  updatedGameHistory: Array<Word>;
  username: string = JSON.parse(sessionStorage.getItem('currentUser'))['username'];

  constructor(
    private dialogRef: MatDialogRef<SuccessComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private gameService: GameService,
    private router: Router
  ) { }

  ngOnInit() {
    // call the services that will send a put request to 
    // the updategameinfo and the updategamehistory endpoints
    this.updateGameData();
  }

  async updateGameData() {
    this.updatedScore = await this.gameService.updateGameInfo(this.data[0]);
    this.updatedGameHistory = await this.gameService.updateGameHistory(this.data[1]);
  }

  onContinuePlaying() {
    this.dialogRef.close();
    this.router.navigate(['/game/start']);
  }

  onStopPlaying() {
    this.dialogRef.close();
    this.router.navigate(['profile']);
  }

  onCheckGameHistory() {
    this.dialogRef.close();
    this.router.navigate(['/game/history']);
  }

}
