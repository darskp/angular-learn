import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';
import { BchildComponent } from '../bchild/bchild.component';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [BchildComponent],
  providers:[CounterService],
  templateUrl: './b.component.html',
  styleUrl: './b.component.scss'
})
export class BComponent {

  constructor(public counterservice: CounterService) {


  }

}
