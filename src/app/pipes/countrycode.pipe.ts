import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countrycode',
  standalone: true
})
export class CountrycodePipe implements PipeTransform {

  transform(value: number, country?: string): string {
    if(country == "USA"){
      return "+1" + value;
    }
    return "+91"+value;
  }
 
}
