import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value, args: any[]): any {

    let data = [];

        for (let i = 0; i < value.length; i ++) {
          console.log(value);
            // data.push({ key: key, value: value[key] });

        }
    return data;
}


}
