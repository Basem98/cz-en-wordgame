import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Word } from 'src/app/interfaces/word';
import { Router } from '@angular/router';

@Component({
  selector: 'app-right-answer',
  templateUrl: './right-answer.component.html',
  styleUrls: ['./right-answer.component.css']
})
export class RightAnswerComponent {
  chosenWord: Word = this.data.chosenWord;

  constructor(private dialogRef: MatDialogRef<RightAnswerComponent>,
    @Inject(MAT_DIALOG_DATA) private data: any,
    private router: Router
    ) { }


  onContinuePlaying() {
    this.dialogRef.close();
    this.router.navigate(['/game/start']);
  }
}
