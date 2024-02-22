import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  componentName: string = "Angular";
  name: string = "";

  getName(e: any) {
    console.log(e.target.value);
    this.name = e.target.value;
  }
  handlClick() {
   alert(this.name)
  }

}
