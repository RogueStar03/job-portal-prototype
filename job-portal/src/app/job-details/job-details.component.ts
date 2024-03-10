import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../shared/Job-model';
import { JobService } from '../services/job.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.css'
})
export class JobDetailsComponent {
  jobId!: number;
  job: Job | undefined;

  constructor(private route: ActivatedRoute, private jobService: JobService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.jobId = +params.get('id')!;
      this.job = this.jobService.getJobById(this.jobId);
    });
  }

  applyForJob(): void {
    // Logic to apply for the job
  }
}
