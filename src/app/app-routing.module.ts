import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { FoyerListComponent } from './foyer-list/foyer-list.component';
import { FoyerFormComponent } from './foyer-form/foyer-form.component';

import { AffecterFoyerUniComponent } from './affecter-foyer-uni/affecter-foyer-uni.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component';
import { UpdateBlocComponent } from './update-bloc/update-bloc.component';
import { FormBlocComponent } from './form-bloc/form-bloc.component';
import { AffecblocfoyComponent } from './affecblocfoy/affecblocfoy.component';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { EtudiantEditComponent } from './etudiant-edit/etudiant-edit.component';
 



 



const routes: Routes = [
  {path:"", redirectTo:"home", pathMatch:"full"},
  {path:"foyers", component:FoyerListComponent},
  {path:"addFoyers", component:FoyerFormComponent},
  {path:"addetudiant", component:EtudiantFormComponent},
  {path:"etudiants", component:EtudiantListComponent},
  {path:"modifyEtudiant/:id", component:EtudiantEditComponent},
  {
    path: 'blocs',
    loadChildren: () =>
      import('./bloc-module/bloc-module.component').then((m) => m.BlocModuleComponent)
  },
  {path:"aff", component:AffecblocfoyComponent},
  {
    path: 'university',
    loadChildren: () =>
      import('./university-routing/university-routing.module').then(
        (m) => m.UniversityRoutingModule
      ),
  },
  { path: 'update-bloc/:id', component:UpdateBlocComponent },
  {path:"addBlock", component:FormBlocComponent},

  
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
