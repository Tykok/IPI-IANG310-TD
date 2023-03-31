import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {NavbarComponent} from './navbar/navbar.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ClubProfileComponent} from './club-profile/club-profile.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    NgbModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavbarComponent,
    LoginComponent,
    ClubProfileComponent
  ],
  exports: [
    NavbarComponent,
    ClubProfileComponent
  ]
})
export class ComponentsModule {
}
