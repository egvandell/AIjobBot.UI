import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Job } from '../models/jobs.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  testing: string = environment.baseApiUrl;

  constructor(private http: HttpClient) { }

  GetAllJobOpportunities(): Observable<Job[]>{
    return this.http.get<Job[]>(this.testing + '/api/JobOpportunity/GetJobOpportunities');
  }
}