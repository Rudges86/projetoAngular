import { PokemonDescricao } from './pokemon.descricao.interface';
export interface Pokemon{
    name:string;
    id:string;
    abilities:Ability[];
    types:Types[];
    base_experience:number;
    sprites:Sprites;
}

export interface Ability{
    ability:{
        name:string;
        url:string;
    };
}

export interface Types{
    type:{
        name:string;
        url:string;
    }
}

export interface Sprites{
   front_default:string;
   other:Other
}

export interface Other{
    dream_world:{
        front_default:string;
    }
}

