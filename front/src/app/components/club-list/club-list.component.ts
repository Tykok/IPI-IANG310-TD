import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ClubModel} from "../../classes/club.model";
import {Router} from "@angular/router";
import {ClubService} from "../../services/club.service";

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css'],
})
export class ClubListComponent implements OnInit {
  clubList: Array<ClubModel>;

  constructor(private router: Router,
              private clubService: ClubService) {
  }

  ngOnInit() {
    this.loadClubs();
  }

  loadClubs() {
    this.clubService.getAll()
      .subscribe(clubs => {
        this.clubList = clubs.filter(club => club.isActive === true);
      })
  }

  updateClub(club?) {
    if (club?.id) {
      this.router.navigate(['club/update/' + club.id])
    } else {
      this.router.navigate(['club/new'])
    }
  }

  deleteClub(club) {
    this.clubService.delete(club)
      .subscribe(c => {
        club = c;
        this.loadClubs();
      })
  }

}
