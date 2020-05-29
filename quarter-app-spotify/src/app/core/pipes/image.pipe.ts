import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(value: Array<any>): string {
    if (value.length > 0) {
      return value[0].url;
    }

    return '../../../../assets/img/no-album.png';
  }

}
