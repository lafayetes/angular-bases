import { Component, EventEmitter, Input, Output } from '@angular/core';
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
    id: '0000',
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?: string): void {
    //TODO Emitir el ID del personaje


    if (!id) return;

    this.onDelete.emit(id);


  }


}
