// company.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Company } from '../shared/Roles/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  // Simulated list of companies (replace with actual API call)
  private companies: Company[] = [
    { companyName: 'Company 1', industry: 'Technology', contactNo: '123-456-7890', email: 'company1@example.com', password: 'password' },
    { companyName: 'Company 2', industry: 'Finance', contactNo: '987-654-3210', email: 'company2@example.com', password: 'password' },
    { companyName: 'Company 3', industry: 'Healthcare', contactNo: '111-222-3333', email: 'company3@example.com', password: 'password' }
    // Add more company entries as needed
  ];

  // Method to fetch all companies
  getCompanies(): Observable<Company[]> {
    return of(this.companies);
  }
}
