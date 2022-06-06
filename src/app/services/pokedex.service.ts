import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  baseUrl=environment.baseUrl;
 
  constructor(private http:HttpClient) { }

  getPokemon(index:number){
    return this.http.get<any>(`${this.baseUrl}/${index}`);
  }

  getPokemonPorNombre(name:String){
    return this.http.get<any>(`${this.baseUrl}/${name}`);
  }
}
