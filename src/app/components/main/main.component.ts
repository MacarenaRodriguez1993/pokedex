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
  filterPoke=[];
 
  constructor(private pokeServicio:PokedexService,
              private router:Router) { 
          
  }
  
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
          imagen:resp.sprites.front_default,
          cora: false
        };
       
        this.data.push(pokeData);
        
        //ORDENAMOS ARRAY
        this.data.sort((id1, id2) => {
          if(id1.id < id2.id){
            return -1;
          }
          else if (id1.id > id2.id){
            return 1;
          }
          else{
            return 0;
          }
        });
        
      });
    }
  }
  verDetalles(id:number){
    this.router.navigate(['detalles',id]);
  }
  
  like(indice:number){
   if(this.data[indice-1].cora==false){
    this.contador++;
    this.data[indice-1].cora=true;
    this.pokemon.push(this.data[indice-1]);
   }
   else{
    this.contador--;
    this.data[indice-1].cora=false;
    for(let i=0;i<this.pokemon.length;i++){
      if(this.pokemon[i].id==(indice)){
        this.pokemon.splice(i,1);
      }
    }
   }
  }
  eliminar(indice:number){
    for(let i=0;i<this.pokemon.length;i++){
      if(this.pokemon[i].id==indice){
        this.pokemon.splice(i,1);
        this.contador--;
        this.data[indice-1].cora=false;
      }
    } 
  }
}