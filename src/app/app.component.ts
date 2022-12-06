import { Component } from '@angular/core';
import { SocialUser, SocialAuthService } from '@abacritt/angularx-social-login';
import { MatDialog } from '@angular/material/dialog';
import { DialogOverviewComponent } from './dialog-overview/dialog-overview.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = "Sunburst"
  socialUser!: SocialUser;
  isLoggedIn?= false;


  constructor(
    private socialAuthService: SocialAuthService,
    private dialogRef: MatDialog

  ) { }
  ngOnInit() {
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      this.isLoggedIn = user != null;
      console.log(this.socialUser);
    });
  }

  openDialog(): void {
    const dialogRef = this.dialogRef.open(DialogOverviewComponent, {
      width: '250px',
    });
  }
}


