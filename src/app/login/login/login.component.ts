import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [
    UserService
  ],
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    });
  }

  onSubmit({value, valid}, ev: Event) {
    ev.preventDefault();
    if (!valid) {
      return;
    }
    this.userService.sendCredentials(value).subscribe(
      (res) => {
        localStorage.setItem('token', res.json().token);
        localStorage.setItem('currentUserName', res.json().name);
        localStorage.setItem('id', res.json().id);
        this.userService.sendToken(localStorage.getItem('token')).subscribe(
          (data) => {
            if (data.status === 200) {
              this.router.navigateByUrl('home');
            }
          }
        );
      }, (error) => {
        console.log(error);
      }
    );
  }

}
