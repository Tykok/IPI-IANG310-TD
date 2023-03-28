import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ClubModel} from "../classes/club.model";
import {map} from "rxjs/operators";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClubService {
  url = 'http://localhost:8080/api/clubs'
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiYWRtaW4iLCJwYXNzd29yZCI6ImFkbWluIiwiaWF0IjoxNjgwMDE2NTMzLCJleHAiOjMzNjAwNjkwNjZ9.PAhbqP4GnZQ-sy3oGjLpnHGKpsj3v_P-Er6K1YJYDHU'

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<ClubModel[]> {
    return this.http.get<ClubModel[]>(this.url, {headers: {'Authorization': `Bearer ${this.token}`}})
      .pipe(
        map(
          (jsonArray: Object[]) => jsonArray.map(jsonItem => ClubModel.fromJson(jsonItem))
        )
      )
  }

  getById(id: number): Observable<ClubModel> {
    return this.http.get<ClubModel>(this.url + '/' + id, {headers: {'Authorization': `Bearer ${this.token}`}})
      .pipe(
        map(
          a => ClubModel.fromJson(a)
        )
      )
  }

  post(club: ClubModel): Observable<ClubModel> {
    return this.http.post(this.url, club, {headers: {'Authorization': `Bearer ${this.token}`}})
      .pipe(
        map(a => ClubModel.fromJson(a))
      )
  }

  put(club: ClubModel): Observable<ClubModel> {
    return this.http.put(this.url + '/' + club.id, club, {headers: {'Authorization': `Bearer ${this.token}`}})
      .pipe(
        map(a => ClubModel.fromJson(a))
      )
  }

  update(club: ClubModel) {
    if (club) {
      return this.post(club)
    } else {
      return this.put(club)
    }
  }

  delete(club) {
    if (club.id !== undefined) {
      club.isActive = false;
      return this.put(club)
    }
  }
}
