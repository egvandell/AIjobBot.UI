import { Component } from '@angular/core';
import { Job } from 'src/app/models/jobs.model';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-recent-jobs',
  templateUrl: './recent-jobs.component.html',
  styleUrls: ['./recent-jobs.component.css']
})
export class RecentJobsComponent {

  jobs: Job[] = [];

  constructor(private jobsService: JobsService) { }  

  ngOnInit(): void {
    this.jobsService.GetJobOpportunities()
      .subscribe({
        next: (jobs: any) => {
          this.jobs = jobs;
          console.log(jobs);
        },
        error: (response: any) => {
          console.log(response);
        }
      })
    }
}
