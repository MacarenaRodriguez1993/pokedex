import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  baseUrl='https://pokeapi.co/api/v2/pokemon';
 
  constructor(private http:HttpClient) { }

  getPokemon(index:number){
    return this.http.get<any>(`${this.baseUrl}/${index}`);
  }


 
}
