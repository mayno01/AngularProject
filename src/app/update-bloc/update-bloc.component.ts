import { Bloc } from 'src/models/bloc.model';
import { Component, OnInit ,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlocService } from '../bloc.service'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.css']
})
export class UpdateBlocComponent implements OnInit {

 
    bloc: Bloc = { idBloc: 0, nomBloc: '', capaciteBloc: 0 };
  
    constructor(private route: ActivatedRoute,private router: Router, private blocService: BlocService) { }
  
    ngOnInit(): void {
      this.route.params.subscribe(params => {
        const id = params['id'];
        if (id) {
          this.blocService.getblocById(id).subscribe(data => {
            this.bloc = data || { idBloc: 0, nomBloc: '', capaciteBloc: 0 }; 
          });
        }
      });
    }
  
    updateBloc(): void {
      if (this.bloc) {
        this.blocService.updateBloc(this.bloc, this.bloc.idBloc).subscribe(updated => {
          this.router.navigate(['/blocs']);
        }, error => {
     
        });
      }
    }
  }