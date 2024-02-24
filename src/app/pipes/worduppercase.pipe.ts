import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'worduppercase',
  standalone: true
})
export class WorduppercasePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.toUpperCase();
  }

}
