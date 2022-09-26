import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Http
import {HttpClientModule} from '@angular/common/http'

//Angular material
import{MatDialogModule} from'@angular/material/dialog';
import{MatToolbarModule} from'@angular/material/toolbar';
import{MatCardModule} from '@angular/material/card';
import{MatListModule} from '@angular/material/list';
import{MatSidenavModule} from '@angular/material/sidenav';
import {HomeComponent } from './views/home/home.component';
import {MatButtonModule} from '@angular/material/button';

//Forms
import{FormsModule} from'@angular/forms';
import{ReactiveFormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeadComponent } from './components/templates/head/head.component';
import { FooterComponent } from './components/templates/footer/footer.component';
import { DialogComponent } from './views/dialog/dialog.component';
import { PokedexComponent } from './views/pokedex/pokedex.component';
import { CardsComponent } from './views/cards/cards.component';
import { NotFoundComponent } from './views/not-found/not-found.component';
@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    HomeComponent,
    DialogComponent,
    PokedexComponent,
    CardsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
