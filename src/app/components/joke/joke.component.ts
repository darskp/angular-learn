import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { JokeService } from '../../services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.scss'
})
export class JokeComponent {
  joke: string = "";
  constructor(private JokeService: JokeService) {
  }

  ngOnInit() {
    this.changeJoke();
  }
  changeJoke(){
    this.JokeService.getJoke().subscribe({
    next:(data:any)=>this.joke=data.value,
    error:(error)=>console.log(error)
    });
  }
}
