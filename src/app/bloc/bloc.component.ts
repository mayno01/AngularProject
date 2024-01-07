import { Component, OnInit } from '@angular/core';
import { BlocService } from '../bloc.service';
import { Router } from '@angular/router';

import { Bloc } from 'src/models/bloc.model';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.css']
})
export class BlocComponent  implements OnInit{
  blocs: any[] = []; 
  selectedBloc: Bloc | undefined;
  constructor(private router: Router, private blocService: BlocService) { }
  ngOnInit(): void {
    this.getBlocs();
  }
  getBlocs() {
    this.blocService.getAllBlocs().subscribe(
      (data: Bloc[]) => { 
        this.blocs = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
    }
    deleteBloc(idBloc: number) {
      const confirmDelete = confirm(`Are you sure you want to delete bloc with ID ${idBloc}?`);
      if (confirmDelete) {
        this.blocService.deleteBloc(idBloc).subscribe(
          () => {
            console.log('Bloc deleted');
            this.getBlocs();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    }
    addbloc(blocData: any) { 
      this.blocService.addbloc(blocData).subscribe(
        (data: any) => {
          console.log('bloc added:', data);
  
          this.getBlocs(); 
        },
        (error) => {
          console.log(error);
       
        }
      );
    }
    updateBloc(bloc: Bloc): void {
      const blocId = bloc.idBloc;
      this.router.navigate(['/update-bloc', blocId]);
    }
  
    showDetails(bloc: Bloc) {
      this.selectedBloc = bloc;
    }
}
