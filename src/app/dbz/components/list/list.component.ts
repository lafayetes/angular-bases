import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  // Se le puede asignar el nombre a un input colocando adentro del parentesis del input el nombre
  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


}
