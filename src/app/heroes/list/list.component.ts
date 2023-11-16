import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Nick Fury'];
  public removedHero?:string;

  removeLastHero(): void {

    this.removedHero = this.heroNames.pop();

  }

}
