import { PokedexComponent } from './views/pokedex/pokedex.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { DialogComponent } from './views/dialog/dialog.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './views/not-found/not-found.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"pokdex",component:PokedexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
