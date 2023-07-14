import { Component } from "@angular/core";

@Component({
  selector:'app-counter',
  template:`
    <h3>Counter: {{counter}}</h3>

    <button (click)="increment(1)">incremento</button>
    <button (click)="Reset()">Reset</button>
    <button (click)="increment(-1)">Decremento</button>`
})
export class CounterComponent{
  public counter: number = 10;
  increment(value:number):void{
    if (value < 0) {
      this.counter -= 1;
    }else{
      this.counter += 1;
    }
  }
  Reset():void{
    this.counter =10; //:)
  }
}
