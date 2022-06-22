import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-detalles-pokemon',
  templateUrl: './detalles-pokemon.component.html',
  styleUrls: ['./detalles-pokemon.component.css']
})
export class DetallesPokemonComponent implements OnInit {

  id:number;
  pokemons:any;
  pokeimagen:String='';


  constructor(private pokeServicio:PokedexService,
              private router:Router,
              private Actived:ActivatedRoute) { 
                this.Actived.params.subscribe(
                  params=>{
                    this.getPokemon(params['id']);
                  }
                );
              }
  ngOnInit(): void {

  }

  getPokemon(id:number){
    this.pokeServicio.getPokemon(id).subscribe(
      resp=>{
        this.pokemons=resp;
      }
    )
  }
  volver(){
    this.router.navigate(['/home']);
  }
}
