import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/jobs.model';
import { JobsService } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})
export class ViewJobComponent {

    jobDetails: Job = {
      jobId: 0,
      jobBoardId: 0,
      jobName: '',
      location: '',
      company: '',
      shortDesc: '',
      url: '',
      salary: '',
      workType: '',
      skills: '',
      jobDescription: '',
      dateTimeFetched: new Date(),
      appliedTo: false,
      coverLetter: '',
      dateTimeApplied: new Date()
    }

  constructor(private jobsService: JobsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const jobId = params.get('jobId');

        console.log('jobId = ' + jobId);

        if (jobId) {
          console.log('jobId = ' + jobId);

          this.jobsService.GetJobOpportunity(Number(jobId))
          .subscribe({
            next: (response) => {
              this.jobDetails = response;
              console.log('this.jobDetails.location = ' + this.jobDetails.location);
              
            }
          })
        }
      }
    })
  }

  updateJob(): void { 
      this.jobsService.updateJob(this.jobDetails)
      .subscribe({
        next: (job) => {
          this.router.navigate(['/jobs']);
          console.log(job);
        }
    });
  }
}
