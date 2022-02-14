import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'customdate'
})
export class CustomdatePipe implements PipeTransform {

  transform(date: Date | String,day:number, format:string='yyyy-MM-dd'): any{
    date = new Date(); 
    date.setDate(date.getDate()-day);
    return new DatePipe('en-US').transform(date, format);
  }
}
