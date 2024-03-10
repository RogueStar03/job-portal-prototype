import { Injectable } from '@angular/core';
import { Job } from '../shared/Job-model';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private jobs: Job[] = [
    { id: 1, title: 'Software Engineer', company: 'ABC Inc.', jobType: 'Full-time', location: 'New York', wfh: true, description: 'Lorem ipsum dolor sit amet.', workHours: '40 hours per week', salary: '$80,000 per year' },
    { id: 2, title: 'Data Analyst', company: 'XYZ Corp.', jobType: 'Contract', location: 'San Francisco', wfh: false, description: 'Lorem ipsum dolor sit amet.', workHours: '30 hours per week', salary: '$60 per hour' },
    // Add more job entries as needed
  ];
  
  constructor() { }

  getJobById(id: number): Job | undefined {
    return this.jobs.find(job => job.id === id);
  }
}
