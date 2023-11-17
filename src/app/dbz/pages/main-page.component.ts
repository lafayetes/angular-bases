import { Component, OnInit } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  // Es importante usar los servicios privados para manejar buenas practicas.
  constructor(private dbzService: DbzService) {

  }


  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id: string): void {

    this.dbzService.deleteCharacterById(id);
  }

  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
  //Siempre que manejemos algo con any es importante  luego definir el tipo de dato para aprovechar las funcionalidades de typescript como el intelisense
  //public characters:any[] = [];

}
