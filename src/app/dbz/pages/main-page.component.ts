import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  //Siempre que manejemos algo con any es importante  luego definir el tipo de dato para aprovechar las funcionalidades de typescript como el intelisense
  //public characters:any[] = [];
  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000,
  }, {
    name: 'Goku',
    power: 9500,
  }, {
    name: 'Vegeta',
    power: 7500,
  }];

  onNewCharacter(character:Character):void{
    // console.log('Main page');
    // console.log(character);
    this.characters.push(character);
  }
}
