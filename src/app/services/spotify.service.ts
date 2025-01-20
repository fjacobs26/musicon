import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private http: HttpClient
  ) { 

  }
  
  searchByName(name: string): Observable<any>{
    const {baseUrl = '', rapidapi = ''} = environment;
    let params = new HttpParams();
    params = params.set('q', name).set('type', 'albums');
    let headers = new HttpHeaders();
    headers = headers.set('x-rapidapi-key', rapidapi);
    return this.http.get(`${baseUrl}search`, {
      params,
      headers
    }).pipe(map((search: any) => {
      return search.albums.items.map((dt: any) => dt.data)
    }));
  }
}
