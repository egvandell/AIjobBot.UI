import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Job } from '../models/jobs.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  GetJobOpportunities(): Observable<Job[]>{
    return this.http.get<Job[]>(this.baseApiUrl + '/api/JobOpportunity/');
  }

  GetJobOpportunity(jobId: number): Observable<Job> {
    return this.http.get<Job>(this.baseApiUrl + '/api/JobOpportunity/' + jobId);
  }

  UpdateJob(jobId: number, jobDetails: Job): Observable<Job> {
    return this.http.put<Job>(`${this.baseApiUrl}/api/JobOpportunity/` + jobId, jobDetails)
  }

  DeleteJob(jobId: number): Observable<Job> {
    return this.http.delete<Job>(this.baseApiUrl + '/api/JobOpportunity/' + jobId);
  }
}
