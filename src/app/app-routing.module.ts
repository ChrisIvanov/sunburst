import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from "./about-us/about-us.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { HomeComponent } from "./home/home.component";
import { LogInComponent } from './log-in/log-in.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
{ path: "", component: HomeComponent },
{ path: "about-us", component: AboutUsComponent },
{ path: "contact-us", component: ContactUsComponent },
{ path: "log-in", component: LogInComponent },
{ path: "productsList", component: ProductsListComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
