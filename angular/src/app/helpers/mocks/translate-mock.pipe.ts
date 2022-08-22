import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translate',
})
export class TranslateMockPipe implements PipeTransform {
  transform(query: string): any {
    return query;
  }
}
