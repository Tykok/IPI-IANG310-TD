import {Component, Input, OnInit} from '@angular/core';
import {ClubModel} from "../../classes/club.model";
import {AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-club-profile',
  templateUrl: './club-profile.component.html',
  styleUrls: ['./club-profile.component.css']
})
export class ClubProfileComponent implements OnInit {
  @Input()
  club;

  constructor() { }

  ngOnInit(): void {
  }

}
