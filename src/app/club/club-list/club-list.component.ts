import {Component, OnInit} from '@angular/core';
import {Club} from "../../classes/club";
import {Router} from "@angular/router";
import {clubs} from "../clubs";

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {
  clubList : Array<Club>;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.loadClubs();
  }

  loadClubs() {
    this.clubList = clubs
  }

  updateClub(club?) {
    if (club?.id) {
      this.router.navigate(['club/update/' + club.id])
    } else {
      this.router.navigate(['club/new'])
    }

  }

  deleteClub(club) {
    const index = clubs.findIndex(c => c.id === club.id)
    clubs.splice(index, 1);
    this.loadClubs();
  }

}
