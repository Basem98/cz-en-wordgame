import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StartGameComponent } from './components/start-game/start-game.component';
import { FailureComponent } from './components/failure/failure.component';
import { SuccessComponent } from './components/success/success.component';
import { GameHistoryComponent } from './components/game-history/game-history.component';
import { TopPlayersComponent } from './components/top-players/top-players.component';
import { ChangedTitleComponent } from './components/changed-title/changed-title.component';
import { RightAnswerComponent } from './components/right-answer/right-answer.component';


const routes: Routes = [
  {
    path: 'start',
    component: StartGameComponent
  },
  {
    path: 'lost',
    component: FailureComponent
  },
  {
    path: 'won',
    component: SuccessComponent
  },
  {
    path: 'history',
    component: GameHistoryComponent
  },
  {
    path: 'topten',
    component: TopPlayersComponent
  },
  {
    path: 'newtitle',
    component: ChangedTitleComponent
  },
  {
    path: 'rightanswer',
    component: RightAnswerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GameRoutingModule { }
