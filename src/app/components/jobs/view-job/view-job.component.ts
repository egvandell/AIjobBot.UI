import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Job } from 'src/app/models/jobs.model';
import { JobsService } from 'src/app/services/jobs.service';
import { jsPDF } from 'jspdf';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-view-job',
  templateUrl: './view-job.component.html',
  styleUrls: ['./view-job.component.css']
})



export class ViewJobComponent implements OnInit {


    coverLetterText: string = `Hi,

I saw your posting where you're looking for a [[jobName]].  I am a senior full stack developer with 20+ years experience.  I've worked extensively in the trenches doing development as well as in PM roles over the years which has enabled me to quickly jump in and understand most operations very quickly.

I'd like to discuss this opportunity further, are you available for a quick chat?

Thanks!

Greg Van Dell`;
    

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

        if (jobId) {
          this.jobsService.GetJobOpportunity(Number(jobId))
          .subscribe({
            next: (response) => {
              this.jobDetails = response;
              if (this.jobDetails.coverLetter === null) {
                this.coverLetterText = this.coverLetterText.replace('[[jobName]]', this.jobDetails.jobName || 'N/A');
              }
              else
                this.coverLetterText = this.jobDetails.coverLetter;
            }
          })
        }
      }
    })
  }

  updateJob(): void { 
      this.jobDetails.coverLetter = this.coverLetterText;

      this.jobsService.UpdateJob(this.jobDetails.jobId, this.jobDetails)
      .subscribe({
        next: (job) => {
          this.router.navigate(['/']);
        }
    });
  }

  exportPDF(): void {
    let doc = new jsPDF();

    if (this.coverLetterText) {
      doc.setFontSize(14); 


  const headerFontSize = 14;
  const textFontSize = 10;
  const pageWidth = doc.internal.pageSize.getWidth();
  
  // Define the header text and align it to the center
  const header = environment.baseApiUrl;


  doc.setFontSize(headerFontSize);
  const headerLines = doc.splitTextToSize(header, pageWidth);
  doc.text(headerLines, pageWidth / 2, 10, { align: 'center' });

doc.setFontSize(10);


      doc.setFontSize(10);
      const splitTitle = doc.splitTextToSize(this.coverLetterText, 180); // Use your desired width here
      doc.text(splitTitle, 10, 25, { maxWidth: 180 }); // Specify the maximum width here
      doc.save('coverLetter.pdf');
    }
  }

}
