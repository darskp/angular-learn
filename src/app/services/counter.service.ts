import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter = 0;
  getCounter() {
    return this.counter
  }
  increment() {
    this.counter = this.counter + 1
  }
  decrement() {
    if (this.counter >= 1) {
      this.counter = this.counter - 1;
    }
  }
  reset() {
    this.counter = 0;
  }
}
