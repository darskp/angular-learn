import { Component, Input, InputSignal, Signal, WritableSignal, input } from '@angular/core';
import { CounterService } from '../../services/counter.service';


function nameFormate(value: string) {
  return "Hi! " + value;
}
@Component({
  selector: 'app-bchild',
  standalone: true,
  imports: [],
  templateUrl: './bchild.component.html',
  styleUrl: './bchild.component.scss'
})
export class BchildComponent {
  constructor(public counterservice: CounterService) {
  }

  // @Input({ alias: "name" }) username:string=""
 username = input("",{alias:"name",transform: nameFormate });
  // onButtonClick() {
  //   this.username="Darshan Kumar";
  // }
}
