import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name : string= 'ironMan'
  public age: number = 45

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`
  }

  changeHero():void{

    //let name2 = prompt("Digite un nuevo nombre");
    //this.name = ''+name2 ;
    this.name ="Spiderman"
  }
  changeAge():void{
    //let age2 = prompt("Digite la edad del super Heroe");
    //this.age = Number(age2);
    this.age = Number(25);
  }
  resetForm():void{
    this.name ='IronMan';
    this.age = 45;
  }


}
