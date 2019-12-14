import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { GameRoutingModule } from './game-routing.module';
import { StartGameComponent } from './components/start-game/start-game.component';
import { GameBoxComponent } from './components/game-box/game-box.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FailureComponent } from './components/failure/failure.component';
import { SuccessComponent } from './components/success/success.component';
import { MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material';
import { MatButtonModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { GameHistoryComponent } from './components/game-history/game-history.component';
import { TopPlayersComponent } from './components/top-players/top-players.component';
import { ChangedTitleComponent } from './components/changed-title/changed-title.component';
import { GameService } from '../services/game.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RightAnswerComponent } from './components/right-answer/right-answer.component';

@NgModule({
  declarations: [
    StartGameComponent,
    GameBoxComponent,
    FailureComponent,
    SuccessComponent,
    GameHistoryComponent,
    TopPlayersComponent,
    ChangedTitleComponent,
    RightAnswerComponent
  ],
  imports: [
    CommonModule,
    GameRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCheckboxModule,
    MatProgressBarModule,
    FormsModule
  ],
  entryComponents: [
    GameBoxComponent,
    SuccessComponent,
    FailureComponent,
    ChangedTitleComponent,
    RightAnswerComponent
  ],
  providers: [
    GameService
  ]
})
export class GameModule { }
