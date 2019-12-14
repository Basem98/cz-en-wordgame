import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Word } from 'src/app/interfaces/word';
import { RightAnswerComponent } from '../right-answer/right-answer.component';


@Component({
  selector: 'app-failure',
  templateUrl: './failure.component.html',
  styleUrls: ['./failure.component.css']
})
export class FailureComponent {
  currentUsername: string = this.data.username;
  chosenWord: Word = this.data.rightAnswer;

  constructor(
    private dialogRef: MatDialogRef<FailureComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private newDialog: MatDialog,
    private router: Router
  ) { }

  onGetRightAnswer() {
    this.dialogRef.close();
    this.newDialog.open(RightAnswerComponent, {
      width: '700px',
      disableClose: true,
      data: {
        chosenWord: this.chosenWord
      }
    });
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
