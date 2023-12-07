import { Component, OnInit, } from '@angular/core';
import { UniversityService } from '../university.service'; 
import { Universite } from 'src/models/universite.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

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
      },
      (error) => {
        console.log(error);
     
      }
    );
  }
  deleteUniversity(universityId: number) {
    this.universityService.deleteUniversite(universityId).subscribe(
      () => {
        console.log('University deleted');

        this.getUniversities();
      },
      (error) => {
        console.log(error);
    
      }
    );
  }
  updateUniversity(university: Universite): void {
    const universityId = university.idUniversite;
    this.router.navigate(['/update-university', universityId]);
  }
}