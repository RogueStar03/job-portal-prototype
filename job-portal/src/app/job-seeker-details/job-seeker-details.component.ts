import { Component } from '@angular/core';
import { JobSeeker } from '../shared/Roles/job-seeker.model';

@Component({
  selector: 'app-job-seeker-details',
  templateUrl: './job-seeker-details.component.html',
  styleUrl: './job-seeker-details.component.css'
})
export class JobSeekerDetailsComponent {
  jobSeeker: JobSeeker = {
    id: 1,
    firstName: 'John',
    middleName: 'Doe',
    lastName: 'Smith',
    contactNo: '987-654-3210',
    email: 'john@example.com',
    password: 'password'
  };
}
