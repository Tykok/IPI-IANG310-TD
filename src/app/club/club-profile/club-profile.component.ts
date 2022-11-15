import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Club} from "../../classes/club";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {clubs} from "../clubs";
import {Location} from "@angular/common";

@Component({
  selector: 'app-club-profile',
  templateUrl: './club-profile.component.html',
  styleUrls: ['./club-profile.component.css']
})
export class ClubProfileComponent implements OnInit {
  club: Club;
  title = ''

  clubForm: FormGroup;
  submitted: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private location: Location) {
  }

  ngOnInit() {
    this.clubForm = this.fb.group({
      'nom': new FormControl(undefined, Validators.required),
      'ville': new FormControl(undefined, Validators.required),
      'pays': new FormControl(undefined, Validators.required),
      'stade': new FormControl(undefined, Validators.required),
      'logo': new FormControl(undefined, Validators.required)
    });

    if (this.route.snapshot.routeConfig.path === 'club/new') {
      this.title = 'Add a new club'
      this.loadClub();
    } else {
      this.title = 'Update club\'s info'
      const id = +this.route.snapshot.paramMap.get('id');
      this.loadClub(id)
    }
  }

  loadClub(id?) {
    this.club = id ? clubs.find(c => c.id === id) : new Club(clubs.length + 1, undefined, undefined, undefined, undefined, undefined, true)
    this.setControls();
  }

  get controls() {
    return this.clubForm.controls
  }

  setControls() {
    this.clubForm.patchValue({
      nom: this.club.nom,
      ville: this.club.ville,
      pays: this.club.pays,
      stade: this.club.stade,
      logo: this.club.logo,
    });
  }

  onSubmit() {
    // this.loading = true;
    this.submitted = true;
    // stop here if form is invalid
    if (this.clubForm.invalid) {
      console.log('INVALID', this.clubForm.controls)
      return;
    }
    this.club.nom = this.controls.nom.value;
    this.club.ville = this.controls.ville.value;
    this.club.pays = this.controls.pays.value;
    this.club.stade = this.controls.stade.value;
    this.club.logo = this.controls.logo.value;

    if (!clubs.find(c => c.id === this.club.id)){
      clubs.push(this.club)
    } else {
      const index = clubs.findIndex(c => c.id === this.club.id);
      clubs[index] = this.club;
    }

    this.router.navigate(['/club/list'])
  }

  back() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loadClub(id)
    this.location.back();
  }

}
