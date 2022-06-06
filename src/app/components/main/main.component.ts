import { Component, OnInit } from '@angular/core';
import { pokemon } from 'src/app/model/pokemons';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  json:String[]=['id','name','imagen'];
  data:any[]=[];
  pokemon=[];
  
  constructor(private pokeServicio:PokedexService) { }
  
  ngOnInit(): void {
    this.traerPokemon();
  }

  traerPokemon(){
    let pokeData;
    for(let i = 1; i<=150; i++){ 
      this.pokeServicio.getPokemon(i).subscribe(resp=>{
        pokeData = {
          id: i,
          name:resp.name,
          imagen:resp.sprites.front_default
        };
        this.data.push(pokeData);
        console.log(resp);
        console.log(pokeData)
      });
    }
  }

}
