import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.componets';

@NgModule({
  declarations: [
    CounterComponent
  ],
  exports: [
    CounterComponent
  ],
  providers: [],
  bootstrap: []
})
export class CounterModule { }
