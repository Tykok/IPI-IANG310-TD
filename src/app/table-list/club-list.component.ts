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
      new Club(1, 'Toulouse FC', 'Toulouse', 'France', 'Stadium Toulouse', 'https://upload.wikimedia.org/wikipedia/fr/8/8b/Logo_Toulouse_FC_2018.svg'),
      new Club(2, 'Monaco', 'Monaco', 'France', 'Stade Louis II', 'https://upload.wikimedia.org/wikipedia/fr/5/58/Logo_AS_Monaco_FC_-_2021.svg'),
      new Club(3, 'Olympique Marseille', 'Marseille', 'France', 'Stade Vélodrome', 'https://upload.wikimedia.org/wikipedia/fr/4/43/Logo_Olympique_de_Marseille.svg'),
    )
  }

}
