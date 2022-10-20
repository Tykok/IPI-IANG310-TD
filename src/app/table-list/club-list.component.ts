import { Component, OnInit } from '@angular/core';
import {Club} from "../classes/club";

@Component({
  selector: 'app-table-list',
  templateUrl: './club-list.component.html',
  styleUrls: ['./club-list.component.css']
})
export class ClubListComponent implements OnInit {
  clubList = new Array<Club>();

  constructor() { }

  ngOnInit() {
    this.clubList.push(
      new Club(1, 'Toulouse FC', 'Toulouse', 'France', 'Stadium Toulouse'),
      new Club(2, 'Monaco', 'Monaco', 'France', 'Stade Louis II'),
      new Club(3, 'Olympique Marseille', 'Marseille', 'France', 'Stade Vélodrome'),
    )
  }

}
