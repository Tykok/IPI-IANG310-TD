import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

  constructor(private http: HttpClient,
              private router: Router) {
  }

  login(email: string, password: string) {
    const url = 'http://localhost:8080/api/token'
    const body = {user: email, password: password}
    return this.http.post<any>(url, body)
      .pipe(map(response => {
          // login successful if there's a jwt token in the response
          if (response && response.key) {
            localStorage.setItem('token', response.key);
            localStorage.setItem('user', email);
          }
        }
      ));
  }

  isAuthenticated() {
    if (localStorage.getItem('token')) {
      // logged in so return true
      return true;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['login'])
  }
}
