import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  // template:
  //   `<h1> hi</h1>`,
  styleUrl: './app.component.scss'
})

export class AppComponent {
  name = "Darshan"
  city = "Bangalore"
  status = "Single"
  isDisabled = false
  users = [
    { id: 1, name: "Darshan1", city: "Bangalore", status: "Single" },
    { id: 2, name: "Darshan2", city: "Mysore", status: "Married" },
    { id: 3, name: "Darshan3", city: "Bangalore", status: "Single" },
  ]

}
