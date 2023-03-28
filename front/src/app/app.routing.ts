import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {ClubListComponent} from "./components/club-list/club-list.component";
import {ClubProfileComponent} from "./components/club-profile/club-profile.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./services/auth-guard.service";

const routes: Routes = [
  {path: 'club/list', component: ClubListComponent, /* canActivate: [AuthGuard] */},
  {path: 'club/update/:id', component: ClubProfileComponent, /* canActivate: [AuthGuard] */},
  {path: 'club/new', component: ClubProfileComponent, /* canActivate: [AuthGuard] */},
  {path: 'login', component: LoginComponent},
  {
    path: '**',
    redirectTo: 'club/list'
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [],
})
export class AppRoutingModule {
}
