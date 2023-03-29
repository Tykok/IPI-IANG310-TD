import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {ClubListComponent} from "./components/club-list/club-list.component";
import {ClubUpdateComponent} from "./components/club-update/club-update.component";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./services/auth-guard.service";

const routes: Routes = [
  {path: 'club/list', component: ClubListComponent, canActivate: [AuthGuard]},
  {path: 'club/update/:id', component: ClubUpdateComponent, canActivate: [AuthGuard]},
  {path: 'club/new', component: ClubUpdateComponent, canActivate: [AuthGuard]},
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
