import { Component } from '@angular/core';
import { Job } from 'src/app/models/jobs.model';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent {

  jobs: Job[] = [];

  constructor(private jobsService: JobsService) { }  

  ngOnInit(): void {
    this.jobsService.GetAllJobOpportunities()
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
