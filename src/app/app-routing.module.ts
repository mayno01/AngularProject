import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlocComponent } from './bloc/bloc.component';  
import { FoyerListComponent } from './foyer-list/foyer-list.component';
import { FoyerFormComponent } from './foyer-form/foyer-form.component';

import { AffecterFoyerUniComponent } from './affecter-foyer-uni/affecter-foyer-uni.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component';

 



const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"foyers", component:FoyerListComponent},
  {path:"addFoyers", component:FoyerFormComponent},
  {path:"blocs", component:BlocComponent},
  {
    path: 'university',
    loadChildren: () =>
      import('./university-routing/university-routing.module').then(
        (m) => m.UniversityRoutingModule
      ),
  },

  
  {path:"foyUni", component:AffecterFoyerUniComponent},
  {path:"adduniversite", component:FormUniversiteComponent},
  {
    path: 'update-university/:id',
    loadChildren: () =>
      import('../app/update-university/update-universityroute-routing.module').then(
        (m) => m.UpdateUniversityrouteRoutingModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
