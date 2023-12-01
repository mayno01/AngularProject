import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversityComponent } from './university/university.component';
import { BlocComponent } from './bloc/bloc.component';  
import { FoyerListComponent } from './foyer-list/foyer-list.component';
import { FoyerFormComponent } from './foyer-form/foyer-form.component';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { AffecterFoyerUniComponent } from './affecter-foyer-uni/affecter-foyer-uni.component';
 



const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"foyers", component:FoyerListComponent},
  {path:"addFoyers", component:FoyerFormComponent},
  {path:"blocs", component:BlocComponent},
  {path:"university", component:UniversityComponent},
  { path: 'update-university/:id', component: UpdateUniversityComponent },
  
  {path:"foyUni", component:AffecterFoyerUniComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
