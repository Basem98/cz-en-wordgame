import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './root-components/profile/profile.component';
import { HomepageComponent } from './root-components/homepage/homepage.component';


const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: 'game',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./game/game.module').then(m => m.GameModule)
  },
  {
    path: 'profile', canActivate: [AuthGuard], component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
