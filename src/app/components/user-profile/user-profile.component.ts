import { CommonModule } from '@angular/common';
import { Component, Input, booleanAttribute, numberAttribute } from '@angular/core';

function templateName(username:string){
return "Hi, "+username+" How are you?"
}
function templateName1(Age:String){
return typeof(Number(Age))
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  // @Input() name:string="";
  // @Input({ alias: "Username",transform:templateName }) name: string = "";
  // @Input({ alias: "isSingle",transform:booleanAttribute }) SingleStatus!: boolean;
  // @Input({ alias: "age",transform:templateName1}) userAge!: number;

  @Input({ alias: "Username",transform:templateName }) name:string="";
  @Input() city:string="";
  @Input() status:string="";

}