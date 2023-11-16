import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'Loki';
  }
  changeAge():void{
    this.age = 23;
  }

  resetForm(){
    this.name = 'ironman';
    this.age = 45;
  }
}
