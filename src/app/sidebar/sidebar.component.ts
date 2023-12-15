import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private router: Router) { }
  navigateToUniversity() {
    this.router.navigateByUrl('/university');
  }
  navigateToAddUniversity() {
    this.router.navigate(['/adduniversite']);
  }
  navigateToAffecter() {
    this.router.navigate(['/foyUni']);
  }
  navigateToBlock() {
    this.router.navigateByUrl('/blocs');
  }
  navigateToEtudiant() {
    this.router.navigateByUrl('/etudiants');
  }
  navigateToAddEtudiant() {
    this.router.navigateByUrl('/addetudiant');
  }
  navigateToAddBlock() {
    this.router.navigateByUrl('/addBlock');
  }
  navigateToaffecterBloc() {
    this.router.navigateByUrl('/aff');
  }
}
