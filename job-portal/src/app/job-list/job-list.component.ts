// job-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Job } from '../shared/Job-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  public jobList: Job[] = [
    { id: 1, title: 'Software Engineer', company: 'ABC Inc.', jobType: 'Full-time', location: 'New York', wfh: true, description: 'Lorem ipsum dolor sit amet.', workHours: '40 hours per week', salary: '$80,000 per year' },
    { id: 2, title: 'Data Analyst', company: 'XYZ Corp.', jobType: 'Contract', location: 'San Francisco', wfh: false, description: 'Lorem ipsum dolor sit amet.', workHours: '30 hours per week', salary: '$60 per hour' },
    // Add more job entries as needed
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Initialize component properties or fetch jobs from the backend
  }

  applyForJob(job: Job) {
    // Implement logic to apply for the selected job
    console.log('Applying for job:', job);
  }

  viewJobDetails(job: Job) {
    this.router.navigate(['/job-details', job.id]); // Use the job id or a unique identifier
  }
}
