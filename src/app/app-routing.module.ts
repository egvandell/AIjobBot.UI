import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentJobsComponent } from './components/jobs/recent-jobs/recent-jobs.component';
import { ViewJobComponent } from './components/jobs/view-job/view-job.component';

const routes: Routes = [
{
  path: '',
  component: RecentJobsComponent
},
{
  path: 'jobs',
  component: RecentJobsComponent
},
{
  path: 'jobs/view/:id',
  component: ViewJobComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
