import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DetallesPokemonComponent } from './components/detalles-pokemon/detalles-pokemon.component';
import { MainComponent } from './components/main/main.component';

const routes: Routes = [

  {path:'home',component: MainComponent},
  {path:'detalles/:id',component: DetallesPokemonComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
