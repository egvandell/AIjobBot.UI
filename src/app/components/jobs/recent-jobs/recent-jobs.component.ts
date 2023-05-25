import { Component } from '@angular/core';
import { Job } from 'src/app/models/jobs.model';

@Component({
  selector: 'app-recent-jobs',
  templateUrl: './recent-jobs.component.html',
  styleUrls: ['./recent-jobs.component.css']
})
export class RecentJobsComponent {

  jobs: Job[] = [
    {
      "jobId": 3,
      "jobBoardId": 789,
      "jobName": "Full Stack Developer",
      "Location": "Seattle, WA",
      "Company": "Gamma LLC",
      "ShortDesc": "Join our team as a full stack developer and help us build amazing products!",
      "URL": "https://www.gamma.com/careers/full-stack-developer",
      "Salary": "$120,000 - $140,000",
      "WorkType": "Full-time",
      "Skills": "JavaScript, React, Node.js, MongoDB",
      "JobDescription": "As a full stack developer at Gamma LLC, you will be responsible for building and maintaining our web applications and services. You will work closely with our product and design teams to create amazing user experiences.",
      "DateTimeFetched": new Date("2021-11-03T08:00:00Z"),
      "AppliedTo": true,
      "CoverLetter": null,
      "DateTimeApplied": null
    },
    {
      "jobId": 4,
      "jobBoardId": 101112,
      "jobName": "Mobile Developer",
      "Location": "San Francisco, CA",
      "Company": "Delta Inc.",
      "ShortDesc": "Join our team as a mobile developer and help us build amazing apps!",
      "URL": "https://www.delta.com/careers/mobile-developer",
      "Salary": "$100,000 - $130,000",
      "WorkType": "Full-time",
      "Skills": "Swift, Kotlin, React Native",
      "JobDescription": "As a mobile developer at Delta Inc., you will be responsible for building and maintaining our iOS and Android apps. You will work closely with our product and design teams to create amazing user experiences.",
      "DateTimeFetched": new Date("2021-11-04T07:00:00Z"),
      "AppliedTo": false,
      "CoverLetter": null,
      "DateTimeApplied": null
    }  ];

  constructor() {}

  ngOnInit(): void {
    this.jobs.push();
  }
}
