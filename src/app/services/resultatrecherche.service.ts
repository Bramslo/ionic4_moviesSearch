import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

export enum TypeDonne {
  all = '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class ResultatrechercheService {


  url = 'http://www.omdbapi.com/' ;
  cleApi = '85212138';

  constructor(private http: HttpClient) { }

  trouveMoi(title: string, type: TypeDonne): Observable<any> {
    return this.http.get(`${this.url}?s=${encodeURI(title)}&type=${type}&apikey=${this.cleApi}`).pipe(
      map(results =>results['Search']));
  }

  ceciEst(id) {
    return this.http.get(`${this.url}?i=${id}&plot=full&apikey=${this.cleApi}`);
  }
}
