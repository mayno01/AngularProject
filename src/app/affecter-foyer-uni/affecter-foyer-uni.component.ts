import { Component, OnInit } from '@angular/core';
import { UniversityService } from '../university.service';  
import { Universite } from 'src/models/universite.model';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-affecter-foyer-uni',
  templateUrl: './affecter-foyer-uni.component.html',
  styleUrls: ['./affecter-foyer-uni.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('true', style({ opacity: 1 })),
      state('false', style({ opacity: 0 })),
      transition('false => true', animate('500ms ease-in')),
      transition('true => false', animate('500ms ease-out')),
    ])
  ]
  
})
export class AffecterFoyerUniComponent implements OnInit{
  idFoyer: number | undefined;
  nomUniversity: string | undefined;
  idUniversite: number | undefined;
  showForm1: boolean = true;
  ngOnInit(): void {
  }

  toggleForms() {
    this.showForm1 = !this.showForm1;
  }

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
    
      },
      (error: any) => {
        console.error('Error desaffecting foyer from university:', error);
     
      }
    );
  } else{
    console.warn('please enter ID universite')

  }
  }

}
