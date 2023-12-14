import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityComponent } from '../university/university.component';
import { UpdateUniversityComponent } from '../update-university/update-university.component';

const routes: Routes = [
  { path: '', component: UniversityComponent },
  { path: 'update-university/:id', component: UpdateUniversityComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UniversityRoutingModule {}