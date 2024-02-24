import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { User } from './model/type';
import { HighlightDirective } from './directives/highlight.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserProfileComponent, HighlightDirective],
  templateUrl: './app.component.html',
  // template:
  //   `<h1> hi</h1>`,
  styleUrl: './app.component.scss'
})

export class AppComponent {
  customColor = "blue"
  name = "Darshan";
  city = "Bangalore";
  status = "Single";
  isDisabled = false;

  users = [
    { id: 1, name: "Darshan1", city: "Bangalore", status: "Single" },
    // { id: 2, name: "Darshan2", city: "Mysore", status: "Married" },
    // { id: 3, name: "Darshan3", city: "Bangalore", status: "Single" },
  ]
  receivedData(e: User) {
    console.log(e);
    let indexMatch = this.users.findIndex(user => user.id === e.id);
    console.log(indexMatch);
    this.users[indexMatch].city = e.newCityName;
  }

  checkDistroy(){
  this.users=[]
  }


}
