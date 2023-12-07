import { Component } from '@angular/core';
import { UniversityService } from '../university.service';  
import { Universite } from 'src/models/universite.model';

@Component({
  selector: 'app-affecter-foyer-uni',
  templateUrl: './affecter-foyer-uni.component.html',
  styleUrls: ['./affecter-foyer-uni.component.css']
})
export class AffecterFoyerUniComponent {
  idFoyer: number | undefined;
  nomUniversity: string | undefined;
  idUniversite: number | undefined;

  constructor(private universityService: UniversityService) {}
  affectUniversityToFoyer(): void {
    if (this.idFoyer !== undefined && this.nomUniversity !== undefined) {
      this.universityService.affecterUniversiteToFoyer(this.idFoyer, this.nomUniversity).subscribe(
        (result: Universite) => {
          console.log('University affected to foyer:', result);
    
        },
        (error: any) => {
          console.error('Error affecting university to foyer:', error);
       
        }
      );
    } else {
      console.warn('Please enter both ID Foyer and University Name.');
    }
  }

  desaffecterFoyerFromUniversity(): void {
    if (this.idUniversite !== undefined){
    this.universityService.desaffecterFoyerFromUniversite(this.idUniversite).subscribe(
      (result: Universite) => {
        console.log('Foyer desaffected from university:', result);
        // Handle success, if needed
      },
      (error: any) => {
        console.error('Error desaffecting foyer from university:', error);
        // Handle error, if needed
      }
    );
  } else{
    console.warn('pealse enter ID universite')

  }
  }

}
