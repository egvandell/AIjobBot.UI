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
      id: 1,
      title: 'Frontend Developer',
      description: 'We are looking for a skilled frontend developer to join our team.',
      company: 'Acme Inc.',
      url: 'https://www.acme.com',
      location: 'New York, NY',
      salary: 80000,
      datePosted: new Date('2021-10-01')
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      description: 'We are seeking a full stack developer to help us build our next generation platform.',
      company: 'Beta Corp.',
      location: 'San Francisco, CA',
      url: 'https://www.acme.com',
      salary: 100000,
      datePosted: new Date('2021-09-15')
    },
    {
      id: 3,
      title: 'Backend Engineer',
      description: 'We are looking for a backend engineer to help us scale our infrastructure.',
      company: 'Gamma LLC',
      location: 'Seattle, WA',
      url: 'https://www.acme.com',
      salary: 90000,
      datePosted: new Date('2021-10-05')
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.jobs.push();
  }
}
