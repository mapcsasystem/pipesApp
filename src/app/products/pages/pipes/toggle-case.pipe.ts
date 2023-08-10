import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string, arg: boolean): string {
    if (arg) {
      return value.toUpperCase();
    } else {
      return value.toLocaleLowerCase();
    }
  }
}
