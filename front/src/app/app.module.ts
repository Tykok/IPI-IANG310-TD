import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';

import {AppRoutingModule} from './app.routing';
import {ComponentsModule} from './components/components.module';

import {AppComponent} from './app.component';

import {ClubUpdateComponent} from "./components/club-update/club-update.component";
import {ClubListComponent} from "./components/club-list/club-list.component";
import {AuthGuard} from "./services/auth-guard.service";
import {AuthService} from "./services/auth.service";
import {OrderModule} from "ngx-order-pipe";

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    OrderModule
  ],
  declarations: [
    AppComponent,
    ClubListComponent,
    ClubUpdateComponent
  ],
  providers: [
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
