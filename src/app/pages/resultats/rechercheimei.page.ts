import { Component, OnInit } from '@angular/core';
import { ResultatrechercheService } from 'src/app/services/resultatrecherche.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rechercheimei',
  templateUrl: './rechercheimei.page.html',
  styleUrls: ['./rechercheimei.page.scss'],
})
export class RechercheimeiPage implements OnInit {

  information = null;

  constructor(private activatedRoute: ActivatedRoute, private resultatrecherche: ResultatrechercheService) { }

  ngOnInit() {

    let id = this.activatedRoute.snapshot.paramMap.get('id');
    this.resultatrecherche.ceciEst(id).subscribe(result => {
      this.information = result;
      console.log(result);
    });
  }


  openWebsite() {
    window.open(this.information.Website, '_blank');
  }


  }
