import { Component } from '@angular/core';
import { MatDialogRef, MatDialog } from '@angular/material/dialog';
import { User } from 'src/app/interfaces/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-changed-title',
  templateUrl: './changed-title.component.html',
  styleUrls: ['./changed-title.component.css']
})
export class ChangedTitleComponent {
  currentUser: User = JSON.parse(sessionStorage.getItem('currentUser'));

  constructor(private dialog: MatDialogRef<ChangedTitleComponent>, private router: Router, private allDialogs: MatDialog) { 
    setTimeout(() => {
      this.dialog.close();
    }, 10000)
  }

  onCheckNewTitle() {
    this.allDialogs.closeAll();
    this.router.navigate(['profile']);
  }

  onContinuePlaying() {
    this.allDialogs.closeAll();
    this.router.navigate(['/game/start']);
  }

}
