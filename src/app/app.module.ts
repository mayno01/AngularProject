import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UniversityComponent } from './university/university.component';
import { BlocComponent } from './bloc/bloc.component';
import { FoyerListComponent } from './foyer-list/foyer-list.component';
import { FoyerServiceService } from './foyer-service.service';
import { FoyerFormComponent } from './foyer-form/foyer-form.component';
import { FormsModule } from '@angular/forms';
import { UpdateUniversityComponent } from './update-university/update-university.component';
import { AffecterFoyerUniComponent } from './affecter-foyer-uni/affecter-foyer-uni.component';
import { TableViewComponent } from './table-view/table-view.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormUniversiteComponent } from './form-universite/form-universite.component';
import { UnidetailsComponent } from './unidetails/unidetails.component';
import { UpdateBlocComponent } from './update-bloc/update-bloc.component';
import { FormBlocComponent } from './form-bloc/form-bloc.component';
import { AffecblocfoyComponent } from './affecblocfoy/affecblocfoy.component';
import { EtudiantFormComponent } from './etudiant-form/etudiant-form.component';
import { EtudiantEditComponent } from './etudiant-edit/etudiant-edit.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { BlocModuleComponent } from './bloc-module/bloc-module.component';


@NgModule({
  declarations: [
    AppComponent,
    FoyerListComponent,
    BlocComponent,
    UniversityComponent,
    FoyerFormComponent,
    UpdateUniversityComponent,
    AffecterFoyerUniComponent,
    TableViewComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FormUniversiteComponent,
    UnidetailsComponent,
    UpdateBlocComponent,
    FormBlocComponent,
    AffecblocfoyComponent,
    EtudiantFormComponent,
    EtudiantEditComponent,
    EtudiantListComponent,

   
   
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [FoyerServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
