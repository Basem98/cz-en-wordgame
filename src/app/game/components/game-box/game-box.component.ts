import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Word } from 'src/app/interfaces/word';
import { SuccessComponent } from '../success/success.component';
import { User } from 'src/app/interfaces/user';
import { FailureComponent } from '../failure/failure.component';

@Component({
  selector: 'app-game-box',
  templateUrl: './game-box.component.html',
  styleUrls: ['./game-box.component.css']
})
export class GameBoxComponent implements OnInit {
  words: Array<Word> = this.data;
  chosenWord: Word = this.words[Math.floor(Math.random() * 2)];
  answer0: string;
  answer1: string;
  answer2: string;
  finalAnswer: string;
  currentUser: User = JSON.parse(sessionStorage.getItem('currentUser'));
  progressBarValue: number;
  progressBarColor: string = 'accent';

  constructor(
    private dialogRef: MatDialogRef<GameBoxComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private newDialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.progressBarValue = 0;
    setTimeout(() => {
      if (!this.finalAnswer) {
        this.dialogRef.close();
        this.newDialog.open(FailureComponent, {
          width: '700px',
          disableClose: true,
          data: {
            username: this.currentUser.username,
            rightAnswer: this.chosenWord
          }
        });
      }
    }, 30000);
    setInterval(() => {
      this.progressBarValue += 1;
    }, 300);
    }

  onSubmit() {
    if (this.answer0) {
      this.finalAnswer = this.words[0].word;
    } else if (this.answer1) {
      this.finalAnswer = this.words[1].word;
    } else if (this.answer2) {
      this.finalAnswer = this.words[2].word;
    }

    if (this.finalAnswer == this.chosenWord.word) {
      const newScore = this.currentUser.score + 10;
      this.dialogRef.close();
      this.newDialog.open(SuccessComponent, {
        width: '700px',
        disableClose: true,
        data: [
          {
            id: this.currentUser._id,
            score: newScore
          }, 
          { 
            id: this.currentUser._id,
            newWord: this.chosenWord 
          }
        ]
      });
    } else {
      this.dialogRef.close();
      this.newDialog.open(FailureComponent, {
        width: '700px',
        disableClose: true,
        data: {
          username: this.currentUser.username,
          rightAnswer: this.chosenWord
        }
      });
    }
  }
}
