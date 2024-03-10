import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RegisterComponent } from './register/register.component';
import { JobListComponent } from './job-list/job-list.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { JobSeekerDetailsComponent } from './job-seeker-details/job-seeker-details.component';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'jobs', component: JobListComponent},
  { path:'job-details/:id', component: JobDetailsComponent},
  { path: 'company-details/:companyName', component: CompanyDetailsComponent},
  { path: 'jobSeeker-details/:id', component: JobSeekerDetailsComponent},
  { path: 'companies', component: CompanyListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
