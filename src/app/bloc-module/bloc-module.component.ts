import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlocComponent } from '../bloc/bloc.component';
import { UpdateBlocComponent } from '../update-bloc/update-bloc.component';
import { FormBlocComponent } from '../form-bloc/form-bloc.component';


const routes: Routes = [
  { path: '', component: BlocComponent },
  { path: 'update/:id', component: UpdateBlocComponent },
  { path: 'add', component: FormBlocComponent },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlocModuleComponent {

}
