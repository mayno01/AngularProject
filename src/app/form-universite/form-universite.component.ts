import { Component, OnInit, } from '@angular/core';
import { UniversityService } from '../university.service'; 
import { Universite } from 'src/models/universite.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-universite',
  templateUrl: './form-universite.component.html',
  styleUrls: ['./form-universite.component.css']
})
export class FormUniversiteComponent {
  universities: any[] = []; 

  constructor(private router: Router,private universityService: UniversityService) { }

  ngOnInit(): void {
    this.getUniversities();
  }
  
  getUniversities() {
    this.universityService.getAllUniversities().subscribe(
      (data: any[]) => {
        this.universities = data;
      },
      (error) => {
        console.log(error);

      }
      
    );
  }

  addUniversity(universityData: any) { 
    this.universityService.addUniversite(universityData).subscribe(
      (data: any) => {
        console.log('University added:', data);

        this.getUniversities(); 
          
      this.router.navigate(['/university']);
      },
      (error) => {
        console.log(error);
     
      }
    );
  }

}
