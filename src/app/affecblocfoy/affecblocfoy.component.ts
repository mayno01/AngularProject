import { Component } from '@angular/core';
import { BlocService } from '../bloc.service';  
import { Bloc } from 'src/models/bloc.model';

@Component({
  selector: 'app-affecblocfoy',
  templateUrl: './affecblocfoy.component.html',
  styleUrls: ['./affecblocfoy.component.css']
})
export class AffecblocfoyComponent {
  blocId: number | undefined;
  foyerId: number | undefined;

  constructor(private blocService: BlocService) {}

  affecterBlocAFoyer(): void {
    if (this.blocId && this.foyerId) {
      this.blocService.affecterBlocAFoyer(this.blocId, this.foyerId).subscribe(
        (response) => {
          console.log('Bloc affected to Foyer successfully', response);
          // Add any additional logic or UI updates as needed
        },
        (error) => {
          console.error('Error affecting Bloc to Foyer', error);
          // Handle errors or display error messages to the user
        }
      );
    } else {
      console.error('Invalid Bloc or Foyer ID');
      // Handle the case where the Bloc or Foyer ID is invalid
    }
}
toggleForms() {
  // Logic to toggle forms or any other functionality
  console.log('Toggle forms method triggered');
}
}