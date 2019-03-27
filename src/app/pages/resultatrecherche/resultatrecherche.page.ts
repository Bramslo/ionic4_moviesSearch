import { Component, OnInit } from '@angular/core';
import { TypeDonne, ResultatrechercheService } from 'src/app/services/resultatrecherche.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-resultatrecherche',
  templateUrl: './resultatrecherche.page.html',
  styleUrls: ['./resultatrecherche.page.scss'],
})
export class ResultatrecherchePage implements OnInit {

  results: Observable<any>;
  searchTerm: string = '';
  type: TypeDonne = TypeDonne.all;

  constructor(private resultatrechercheserrvice: ResultatrechercheService) { }

  ngOnInit() {}

  rechercheChange() {
    this.results = this.resultatrechercheserrvice.trouveMoi(this.searchTerm, this.type);
  }

}
