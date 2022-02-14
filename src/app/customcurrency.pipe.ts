import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customcurrency'
})
export class CustomcurrencyPipe implements PipeTransform {

  transform(arrayValue:Array<any>): number {
    let multiplication:number=1;
    arrayValue.forEach(a => multiplication *= a);
    return multiplication; 
  }

}
