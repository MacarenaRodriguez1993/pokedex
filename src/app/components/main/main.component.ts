import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  
  like(){
    this.contador++;
  }
}
