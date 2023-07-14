import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames:string[] = ['Sipiderman','IronMan','Hulk','Thor'];
  public deleteHero?: string;

  removeLatHero():void{
    this.deleteHero = this.heroNames.pop();
  }



}
