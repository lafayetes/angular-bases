import { Injectable } from '@angular/core';
// Se puede cambiar el nombre de las librerias que importamos utilizando la palabra "as"
import { v4 as uuid } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  constructor() { }

  public characters: Character[] = [{
    id: uuid(),
    name: 'Krillin',
    power: 1000,
  }, {
    id: uuid(),
    name: 'Goku',
    power: 9500,
  }, {
    id: uuid(),
    name: 'Vegeta',
    power: 7500,
  }];

  addCharacter(Character: Character): void {
    // console.log('Main page');
    // console.log(character);
    // Es bueno usar el spread que en pocas lo que hace es agregar todas las propiedades del objeto y aumentarle alguna nueva que trae
    const newCharacter: Character = {
      id: uuid(),
      ...Character
    }
    this.characters.push(newCharacter);
  }
  //Este es el metodo para eliminar por index que no es recomendado
  // onDeleteCharacter(index: number): void {
  //   console.log('entro aqui');

  //   this.characters.splice(index, 1)
  // }
  //Este es el metodo de eliminar por id que es el recomendado:
  deleteCharacterById(id:string){
    this.characters = this.characters.filter(character => character.id !== id);
  }

}
