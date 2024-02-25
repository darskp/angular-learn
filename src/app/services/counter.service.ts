import { Injectable, Signal, WritableSignal, computed, effect, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private counter: WritableSignal<number> = signal(0);
  private doubleCount: Signal<number> = computed(() => this.counter() * 2);

  constructor() {
    effect(() => {
      console.log(`count==> ${this.counter}`);
      console.log(`doublecount==> ${this.doubleCount}`);
    })
  }

  getCounter() {
    return this.counter();
  }
  getdoublecount() {
    return this.doubleCount();
  }
  increment() {
    this.counter.update(value => value + 1)
  }
  decrement() {
    if (this.counter() >= 1) {
      this.counter.update(value => value - 1)
    }
  }
  reset() {
    this.counter.set(0);
  }
}
