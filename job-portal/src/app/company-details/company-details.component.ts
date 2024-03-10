import { Component, OnInit } from '@angular/core';
import { Company } from '../shared/Roles/company.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrl: './company-details.component.css'
})
export class CompanyDetailsComponent implements OnInit {
  company: Company = {
    companyName: '',
    industry: 'Technology',
    contactNo: '123-456-7890',
    email: 'demo@company.com',
    password: 'password'
  };

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const companyName = params.get('companyName');
      console.log(companyName);
      // Fetch company details based on the company name
      // For prototyping purposes, you can directly set the company details
      if(companyName != null) {
        this.company.companyName = companyName;
      }
      
    });
  }
}
