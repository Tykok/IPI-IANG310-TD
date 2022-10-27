import {NgModule} from '@angular/core';
import {CommonModule,} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {AdminLayoutComponent} from './layouts/admin-layout/admin-layout.component';
import {ClubListComponent} from "./club/club-list/club-list.component";
import {ClubProfileComponent} from "./club/club-profile/club-profile.component";

const routes: Routes = [
  {
    path: '',
    component: AdminLayoutComponent,
    redirectTo: 'club/list'
  },
  {path: 'club/list', component: ClubListComponent},
  {path: 'club/update/:id', component: ClubProfileComponent},
  {path: 'club/new', component: ClubProfileComponent},
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
