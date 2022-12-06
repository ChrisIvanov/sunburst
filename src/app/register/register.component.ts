import { Component } from '@angular/core';
import { SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { EmailValidator } from '@angular/forms';
import { Observable } from 'rxjs'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

interface User {
  firstName: string,
  lastName: string,
  email: EmailValidator,
  password: string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  user = Observable<User>;
  socialUser = SocialUser;
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });
}

  // registerForm() {
  //   this.socialAuthService.
  // }
}
