import { PokemonDescricao } from './../interface/pokemon.descricao.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from'rxjs'
import { Pokemon } from '../interface/pokemon.interface';
@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private url = "https://pokeapi.co/api/v2/pokemon"
  private descricao = "https://pokeapi.co/api/v2/pokemon-species"

  constructor(private httpClient:HttpClient) { }

  getPokemonBy(nome:string):Observable<Pokemon>{
    const registros = this.httpClient.get<Pokemon>(`${this.url}/${nome}`)
    //console.log(registros)
    return registros
  }

  getPokemonDescription(nome:string):Observable<PokemonDescricao>{
    const itemsDescricao = this.httpClient.get<PokemonDescricao>(`${this.descricao}/${nome}/`)
    return itemsDescricao;
  }
}

