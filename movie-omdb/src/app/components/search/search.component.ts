import { Component } from '@angular/core';
import { OmdbService } from 'src/app/services/omdb.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  busqueda: string | undefined;

constructor(private serviceOmdb: OmdbService) {}

  buscar() {

    this.serviceOmdb.getQuery(`&s=${this.busqueda}`)
      .subscribe(response => {
        console.log(response)
      })
  }



}
