import { Pipe, PipeTransform } from '@angular/core';
import { IBook } from '../interfaces/global.interface';

@Pipe({
  name: 'filterBooks',
})
export class FilterBooksPipe implements PipeTransform {
  transform(value: IBook[], arg: string): IBook[] {
    if (value) {
      return arg
        ? value.filter((book) =>
            book.title.toLowerCase().includes(arg.toLowerCase()),
          )
        : value;
    }
    return [];
  }
}
