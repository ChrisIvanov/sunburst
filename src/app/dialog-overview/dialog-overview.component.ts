import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from '@abacritt/angularx-social-login';


interface DialogData {
  email: string,
  username: string,
  dateOfBirth: Date
}

@Component({
  selector: 'app-dialog-overview',
  templateUrl: './dialog-overview.component.html',
  styleUrls: ['./dialog-overview.component.scss']
})
export class DialogOverviewComponent {
  title = 'Sunburst';
  loginForm!: FormGroup;
  socialUser!: SocialUser;
  isLoggedIn?= false;

  constructor(
    private formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogOverviewComponent>,

    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  private socialAuthService: SocialAuthService,
   ) {}


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
