import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  emailError: boolean = false;
  passwordError: boolean = false;

  onSubmit() {
    this.emailError = !this.email || !this.isValidEmail(this.email);
    this.passwordError = !this.password;
    if (!this.emailError && !this.passwordError) {
      // Perform login logic here
      console.log('Email:', this.email);
      console.log('Password:', this.password);
    }
  }

  isValidEmail(email: string) {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}
