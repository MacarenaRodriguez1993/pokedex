import { Pipe, PipeTransform } from '@angular/core';
import { pokemon } from '../model/pokemons';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any, arg:any): any{
    if(arg=='')return value;
    const resultPoke=[];
    for(const poke of value){
      if(poke.name.indexOf(arg) >-1){
        resultPoke.push(poke);
      };
    };
    return resultPoke;
  }

}
