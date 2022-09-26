import { PokemonDescricao } from './../../interface/pokemon.descricao.interface';
import { Component, OnInit,Input} from '@angular/core';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog} from '@angular/material/dialog';
import { Pokemon } from 'src/app/interface/pokemon.interface';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
@Input() pokemon!:Pokemon;
@Input() descricao!:PokemonDescricao;

url:string =''
  constructor(private dialog:MatDialog) { }
  

  ngOnInit(): void {

  }


  
  openDialog(enterAnimationDuration:string ,exitAnimationDuration:string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '450px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {name:this.pokemon.name, sprites:this.pokemon.sprites.front_default, descricao:this.descricao.flavor_text_entries},
    });
  }
}
