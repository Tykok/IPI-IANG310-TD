import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    const url = 'http://localhost:8080/api/token'
    const body = {user: email, password: password}
    return this.http.post<any>(url, body)
      .pipe(map(response => {
          // login successful if there's a jwt token in the response
          if (response && response.key) {
            console.log('RESPONSE', response)
            localStorage.setItem('token', response.key);
            localStorage.setItem('user', email);
            // localStorage.setItem('user', response.user);
          }
        }
      ));
  }

  isAuthenticated() {
    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
  }
}
