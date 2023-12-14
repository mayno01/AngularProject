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
  selectedUniversity: Universite | undefined;
  universities: any[] = []; 

  constructor(private router: Router,private universityService: UniversityService) { }

  ngOnInit(): void {
    this.getUniversities();
  }


  showDetails(university: Universite) {
    this.selectedUniversity = university;
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
  deleteUniversity(universityId: number, universityName: string) {
    const confirmDelete = confirm(`Are you sure you want to delete ${universityName}?`);
    if (confirmDelete) {
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
  }
  
  updateUniversity(university: Universite): void {
    const universityId = university.idUniversite;
    this.router.navigate(['/update-university', universityId]);
  }
}