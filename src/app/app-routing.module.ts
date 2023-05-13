import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentJobsComponent } from './components/jobs/recent-jobs/recent-jobs.component';

const routes: Routes = [
{
  path: '',
  component: RecentJobsComponent
},
{
  path: 'jobs',
  component: RecentJobsComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
