import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-detalles-pokemon',
  templateUrl: './detalles-pokemon.component.html',
  styleUrls: ['./detalles-pokemon.component.css']
})
export class DetallesPokemonComponent implements OnInit {

  name!: String;
  urlImagen!: string;
  specie!: String;

  constructor(private pokeServicio:PokedexService) { }

  ngOnInit(): void {
    
  }

  verDetalles(){
    this.pokeServicio.getPokemonPorNombre(this.name).subscribe(data => {
      this.urlImagen=data.sprites.front_default;
      this.name=data.name;
      this.specie=data.species.name;
    });
  }

}
