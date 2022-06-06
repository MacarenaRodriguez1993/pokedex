import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  
  constructor(private pokeServicio:PokedexService,
              private router:Router) { }
  ngOnInit(): void {    
  }
 home(){
   this.router.navigate(['/home'])
 }
}
