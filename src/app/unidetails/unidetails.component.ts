import { Component,Input  } from '@angular/core';
import { Universite } from 'src/models/universite.model';

@Component({
  selector: 'app-unidetails',
  templateUrl: './unidetails.component.html',
  styleUrls: ['./unidetails.component.css']
})
export class UnidetailsComponent {
  @Input() university!: Universite;

}
