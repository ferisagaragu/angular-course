import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, capitalizeAll: boolean = false): string {
    let out = '';
    
    if (capitalizeAll) {
      const splitName: Array<string> = value.toLowerCase().split(' ');
      
      out = splitName.map((name: string) => 
        name[0].toUpperCase() + name.substr(1)
      ).join(' ');
    } else {
      out = value[0].toLocaleUpperCase() + value.toLocaleLowerCase().substring(1);
    }

    return out;
  }

}
