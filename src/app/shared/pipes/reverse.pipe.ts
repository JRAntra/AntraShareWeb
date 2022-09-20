import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(str: string | Date | null): string | null {
    const convertStr = str?.toString()
    const reverseStr = convertStr?.split('').reverse().join('')
    return reverseStr? reverseStr : null;
  }
  
  
}

