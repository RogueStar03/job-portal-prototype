import { Component } from '@angular/core';
import { JobSeeker } from '../shared/Roles/job-seeker.model';
import { Company } from '../shared/Roles/company.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  selectedRole: string = 'jobSeeker';
  jobSeeker: JobSeeker = {
    id: 0,
    firstName: '', lastName: '', email: '', password: '',
    middleName: '',
    contactNo: ''
  };
  company: Company = {
    companyName: '', industry: '', email: '', password: '',
    contactNo: ''
  };
  emailError: boolean = false;
  passwordError: boolean = false;
  contactError: boolean = false;

  isValidEmail(email: string) {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  isValidPhoneNumber(phoneNo: string) {
    // Basic phone number validation regex for 10 digits
    return /^[0-9]{10}$/.test(phoneNo);
  }

  onJobSeekerSubmit() {
    // Handle job seeker registration validation
    this.emailError = !this.jobSeeker.email || !this.isValidEmail(this.jobSeeker.email);
    this.passwordError = !this.jobSeeker.password;
    this.contactError = !this.jobSeeker.contactNo || this.isValidPhoneNumber(this.jobSeeker.contactNo);
    if(!this.emailError && !this.passwordError && !this.contactError) {
      // Perform login logic here
      console.log('Job Seeker Registration:', this.jobSeeker);
    }
  }

  onCompanySubmit() {
    // Handle company registration validation
    this.emailError = !this.company.email || !this.isValidEmail(this.company.email);
    this.passwordError = !this.company.password;
    this.contactError = !this.company.contactNo || this.isValidPhoneNumber(this.company.contactNo);
    if(!this.emailError && !this.passwordError && !this.contactError) {
      // Perform login logic here
      console.log('Company Registration:', this.company);
    }
  }
}
