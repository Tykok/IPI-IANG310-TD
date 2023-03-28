import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClubModel} from "../../classes/club.model";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {clubs} from "../../club/clubs";
import {Location} from "@angular/common";
import {ClubService} from "../../services/club.service";

@Component({
  selector: 'app-club-profile',
  templateUrl: './club-profile.component.html',
  styleUrls: ['./club-profile.component.css']
})
export class ClubProfileComponent implements OnInit {
  club: ClubModel;
  title = ''

  clubForm: FormGroup;
  submitted: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private fb: FormBuilder,
              private location: Location,
              private clubService: ClubService) {
  }

  ngOnInit() {
    this.clubForm = this.fb.group({
      'name': new FormControl(undefined, Validators.required),
      'city': new FormControl(undefined, Validators.required),
      'country': new FormControl(undefined, Validators.required),
      'stadium': new FormControl(undefined, Validators.required),
      'logo': new FormControl(undefined, Validators.required)
    });

    if (this.route.snapshot.routeConfig.path === 'club/new') {
      this.title = 'Ajouter un nouveau club'
      this.club = new ClubModel();
      this.setControls();
    } else {
      this.title = 'Modifier les information du club'
      const id = +this.route.snapshot.paramMap.get('id');
      this.loadClub(id)
    }
  }

  loadClub(id) {
    this.clubService.getById(id)
      .subscribe(club => {
        this.club = club;
        this.setControls();
      })
  }

  get controls() {
    return this.clubForm.controls
  }

  setControls() {
    this.clubForm.patchValue({
      name: this.club?.name,
      city: this.club?.city,
      country: this.club?.country,
      stadium: this.club?.stadium,
      logo: this.club?.logo,
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
    this.club.name = this.controls.name.value;
    this.club.city = this.controls.city.value;
    this.club.country = this.controls.country.value;
    this.club.stadium = this.controls.stadium.value;
    this.club.logo = this.controls.logo.value;

    this.clubService.update(this.club)
      .subscribe(club => {
        this.club = club;
      })

    this.router.navigate(['/club/list'])
  }

  back() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loadClub(id)
    this.location.back();
  }

}
