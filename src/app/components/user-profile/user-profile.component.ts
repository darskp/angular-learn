import { CommonModule } from '@angular/common';
import { Component, ElementRef, EventEmitter, Input, Output, SimpleChange, ViewChild, booleanAttribute, numberAttribute } from '@angular/core';
import { User } from '../../model/type';
import { CountrycodePipe } from '../../pipes/countrycode.pipe';

function templateName(username: string) {
  return "Hi, " + username + " How are you?"
}
function templateName1(Age: String) {
  return typeof (Number(Age))
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule, CountrycodePipe],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
  // @Input() name:string="";
  // @Input({ alias: "Username",transform:templateName }) name: string = "";
  // @Input({ alias: "isSingle",transform:booleanAttribute }) SingleStatus!: boolean;
  // @Input({ alias: "age",transform:templateName1}) userAge!: number;

  countrycode = 123456789;

  @Input({ alias: "Username", transform: templateName }) name: string = "";
  @Input() city: string = "";
  @Input() id!: number;
  @Input() status: string = "";
  @Output() myEvent = new EventEmitter<User>();

  sendData() {
    this.myEvent.emit({ id: this.id, name: this.name, newCityName: "Kumta" })
  }


  constructor() {
    console.log("called constructor", this.name);
  }

  ngOnChanges(chnages: SimpleChange): void {
    console.log("called ngOnChanges", this.id)
    console.log(chnages);
    ;
  }
  ngOnInit() {
    console.log("called ngOnInit", this.name);
  }
  ngOnDestroy() {
    console.log("called ngOnDestroy");
  }


  //view child 
  @ViewChild("myheading") heading?: ElementRef
  ngAfterViewInit() {
    console.log(this.heading?.nativeElement);
    
  }
}
