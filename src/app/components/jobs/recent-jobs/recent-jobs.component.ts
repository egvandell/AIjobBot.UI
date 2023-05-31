import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Job } from 'src/app/models/jobs.model';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-recent-jobs',
  templateUrl: './recent-jobs.component.html',
  styleUrls: ['./recent-jobs.component.css']
})
export class RecentJobsComponent {

  jobs: Job[] = [];

  constructor(private jobsService: JobsService, private router: Router) { }  

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

  deleteJob(id: number, event: Event): void {
    event.preventDefault();
    if (confirm('Are you sure you want to delete this job?')) {
      this.jobsService.DeleteJob(id)
      .subscribe({
        next: (job) => {
          this.jobsService.GetJobOpportunities().subscribe((jobs) => {
            this.jobs = jobs;

          this.router.navigate(['/']);
          });
        }
      });
    }
  }
}
