import { Component, OnInit } from '@angular/core';
import { BlocService } from '../bloc.service';
import { Router } from '@angular/router';
import { Bloc } from 'src/models/bloc.model';
@Component({
  selector: 'app-form-bloc',
  templateUrl: './form-bloc.component.html',
  styleUrls: ['./form-bloc.component.css']
})
export class FormBlocComponent implements OnInit{
  blocs: any[] = []; 
  constructor(private router: Router, private blocService: BlocService) { }
  ngOnInit(): void {
    this.getBlocs();
  }
  getBlocs() {
    this.blocService.getAllBlocs().subscribe(
      (data: Bloc[]) => { // Specify the type for the data parameter
        this.blocs = data;
      },
      (error: any) => {
        console.log(error);
      }
    );
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
}
