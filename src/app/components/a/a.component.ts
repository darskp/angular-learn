import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.scss'
})
export class AComponent {
  // counterservice: CounterService
  // constructor(counterservice:CounterService){
  // this.counterservice=counterservice;
  // }

  constructor(private counterservice: CounterService) {
  }

  getCounter() {
    return this.counterservice.getCounter()
  }
  increment() {
    return this.counterservice.increment()
  }
  decrement() {
    return this.counterservice.decrement()
  }
  reset() {
    return this.counterservice.reset()
  }


}
