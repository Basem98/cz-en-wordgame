import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerificationComponent } from './components/verification/verification.component';


const routes: Routes = [
  {
    path: 'signup', component: SignUpComponent
  },
  {
    path: 'signin', component: SignInComponent
  },
  {
    path: 'verify/:token',
    component: VerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
