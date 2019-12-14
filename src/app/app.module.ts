import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { SignOutComponent } from './root-components/sign-out/sign-out.component';
import { ProfileComponent } from './root-components/profile/profile.component';
import { ForInDirective } from './directives/myForIn/for-in.directive';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HomepageComponent } from './root-components/homepage/homepage.component';



@NgModule({
  declarations: [
    AppComponent,
    SignOutComponent,
    ProfileComponent,
    ForInDirective,
    HomepageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatDialogModule,
    MatToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
