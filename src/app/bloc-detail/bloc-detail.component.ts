import { Component , Input} from '@angular/core';
import { Bloc } from 'src/models/bloc.model';

@Component({
  selector: 'app-bloc-detail',
  templateUrl: './bloc-detail.component.html',
  styleUrls: ['./bloc-detail.component.css']
})
export class BlocDetailComponent {
  @Input() bloc: Bloc | undefined;
}
