import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';
import { UserLogInModel } from '../models/userLoginModel';

@Component({
  selector: 'app-log-in-dialog',
  templateUrl: './log-in-dialog.component.html',
  styleUrls: ['./log-in-dialog.component.scss']
})

  interface DialogData {
  email: string,
  password: string
}

export class LogInDialogComponent {

  title = 'Sunburst';
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedIn?= false;
  onSubmit() { this.submitted = true; }
  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<LogInDialogComponent>,

    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private socialAuthService: SocialAuthService,
  ) { }


  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedIn = user != null;
      console.log(this.socialUser);
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  logOut(): void {
    this.socialAuthService.signOut();
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
