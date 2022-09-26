import { PokemonDescricao } from './../../interface/pokemon.descricao.interface';
import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pokemon } from 'src/app/interface/pokemon.interface';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<DialogComponent>,@Inject(MAT_DIALOG_DATA) public data:any) {}

  ngOnInit(): void {
  }
  
  fechar(): void {
    this.dialogRef.close();
  }

 /* dialogPokemon(){
    this.pokemon = this.teste.pokemon
    this.url = this.teste.url;

    console.log(this.pokemon)
    console.log(this.url)
  }*/
}
