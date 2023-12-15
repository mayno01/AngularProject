import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantService } from 'src/etudiant.service';
import { Etudiant } from 'src/etudiant';

@Component({
  selector: 'app-etudiant-edit',
  templateUrl: './etudiant-edit.component.html',
  styleUrls: ['./etudiant-edit.component.css']
})
export class EtudiantEditComponent implements OnInit{
  etudiant:Etudiant;
  constructor(
    private activatedroute: ActivatedRoute, 
    private router: Router,
    private etudiantService :EtudiantService
  ) {
    this.etudiant = new Etudiant();
  }
  ngOnInit() {
    this.activatedroute.params.subscribe((params) => {
      let id: number | null = Number(params['id'])
      this.etudiantService.getEtudiantById(id)
        .subscribe((etu: Etudiant) => {
          this.etudiant = etu;
        }, (error) => {
          console.error('Error fetching Etudiant', error);
        });
    })
  }
  onSubmit(){
    this.etudiantService.modifyEtudiant(this.etudiant).subscribe(result => this.goToEtudiantList());

  }
  goToEtudiantList(){
    this.router.navigate(['/etudiants']);
  }
  navigateToEditEtudiant(id: number) {
    this.router.navigate(['/modifyEtudiant', id]);
  }
  
}
