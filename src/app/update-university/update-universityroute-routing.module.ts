import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateUniversityComponent } from './update-university.component'; 

const routes: Routes = [{ path: '', component: UpdateUniversityComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateUniversityrouteRoutingModule { }
