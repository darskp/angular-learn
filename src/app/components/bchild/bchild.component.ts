import { Component } from '@angular/core';
import { CounterService } from '../../services/counter.service';

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
}
