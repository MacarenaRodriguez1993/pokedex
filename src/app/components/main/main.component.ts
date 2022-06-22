import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  data:any[]=[];
  pokemon:any[]=[];
  pages:number=1;
  contador:number=0;
  
  constructor(private pokeServicio:PokedexService,
              private router:Router) { 
          
  }
  filterPoke=[];
  ngOnInit(): void {
    this.traerPokemon();
  }
  traerPokemon(){
    let pokeData;
    for(let i = 1; i<=50; i++){ 
      this.pokeServicio.getPokemon(i).subscribe(resp=>{
        pokeData = {
          id: i,
          name:resp.name,
          imagen:resp.sprites.front_default
        };
        this.data.push(pokeData);
      });
    }
  }
  verDetalles(id:number){
    this.router.navigate(['detalles',id]);
  }
  
  like(indice:number){
    this.contador++;
    for(let i=0;i<this.pokemon.length;i++){
      if(this.pokemon[i].id==indice){
        this.pokemon.splice(i,1);
        this.contador--;
      }
    }
    this.pokemon.push(this.data[indice-1]);
  }

  eliminar(indice:number){
    for(let i=0;i<this.pokemon.length;i++){
      if(this.pokemon[i].id==indice){
        this.pokemon.splice(i,1);
        this.contador--;
      }
    } 
  }
}