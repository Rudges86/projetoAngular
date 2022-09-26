import { DialogComponent } from './../dialog/dialog.component';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PokemonDescricao } from './../../interface/pokemon.descricao.interface';
import { PokemonServiceService } from './../../servicos/pokemon-service.service';
import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemon.interface';
import { tap, zip } from 'rxjs';
import { FormGroup,FormControl } from '@angular/forms';



@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  name: string = '';
  formulario !: FormGroup;
  mostraDiv: boolean = false;
  erro!: number;
  pokemon!: Pokemon;
  description!: PokemonDescricao;
  msg:string = '';
  nome = new FormControl('')
  

  constructor(public pokemonService: PokemonServiceService, private dialog: MatDialog) { }
  

  ngOnInit(): void {
    this.formulario = new FormGroup({
      nome:new FormControl()
    })
  }



  getDescricao(name: string) {
    const result = this.pokemonService.getPokemonDescription(name).subscribe((x => {
      this.description = x;
      console.log(this.description)
    }))
    return result;
  }
/*
  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      data: {
        animal: 'panda',
      },
    })
  }*/


  getPokemon() {
    if (this.name == '') {
      this.msg = "Insira o nome do pokemon"
      this.mostraDiv = false;
    } 
    else {
      const name = this.name.toLowerCase();
      this.msg = '';
      zip(
        this.pokemonService.getPokemonBy(name),
        this.pokemonService.getPokemonDescription(name)
      )
        .pipe(
          tap(
            () => {
              // this.openDialog()
              console.log("Carregando")
            }
          )
        )
        .subscribe(results => {
          [this.pokemon, this.description] = results
          console.log("carregamento finalizado")
        }, erro => {
          if (erro.status == 404) {
            this.mostraDiv = false;
            this.erro = 404
          }
          console.log(erro)
        }, () => {
          this.mostraDiv = true;
          console.log("Completo")
        }
        );
    }
  }
}
