import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      'email': new FormControl('', [Validators.required]),
      'password': new FormControl('', Validators.required),
    });
  }

  get controls() {
    return this.loginForm.controls
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log('error', this.loginForm)
      return;
    }

    this.authService.login(this.controls.email.value, this.controls.password.value)
      .subscribe(login => {
        console.log('CONNEXION RÉUSSI!')
        this.router.navigate(['club/list'])
      })
  }
}
