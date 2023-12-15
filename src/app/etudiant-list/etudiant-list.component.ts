import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/etudiant'; 
import { Router } from '@angular/router';
import { EtudiantService } from 'src/etudiant.service';


@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit{
  etudiants! : Etudiant[];
  constructor ( private router: Router,
    private etudiantService :EtudiantService){

  }
  etudiant: Etudiant = new Etudiant();
  ngOnInit()  {
    this.etudiantService.retrieveAllEtudiants().subscribe(data => {
      this.etudiants= data;
    });
}
deleteEtu(indexEtu: number): void {
  const etudiantToDelete = this.etudiants[indexEtu];
  if (etudiantToDelete) {
    this.etudiantService.deleteEtudiant(etudiantToDelete).subscribe(() => {
      this.etudiants = this.etudiants.filter(edu => edu !== etudiantToDelete);
    });
  }
}





  isDeleteConfirmationVisible = false;
  etudiantToDeleteId: number | undefined;

  deleteEtudiantConfirmation(indexEtudiant: number | undefined): void {
    this.isDeleteConfirmationVisible = true;
    this.etudiantToDeleteId = indexEtudiant;
  }

 onConfirmDelete(confirmed: boolean): void {
    if (confirmed) {
      console.log('Delete confirmed');
      if (this.etudiantToDeleteId!=null) {
        let etud = this.etudiants.at(this.etudiantToDeleteId);
        // @ts-ignore
        this.etudiantService.deleteEtudiant(etud).subscribe(() => {
          this.etudiants= this.etudiants.filter((edu)=>{ // @ts-ignore
            return etud.idEtudiant !== edu.idEtudiant })
          this.closeDeleteConfirmation();
        });
      }
    } else {
      console.log('Delete canceled');
      this.closeDeleteConfirmation();
    }
  }

  closeDeleteConfirmation(): void {
    this.isDeleteConfirmationVisible = false;
    this.etudiantToDeleteId = undefined;
  }
  navigateToEditEtudiant(id: number) {
    this.router.navigate(['/modifyEtudiant', id]);
  }
  

}


