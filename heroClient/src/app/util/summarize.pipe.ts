import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summarize'
})
export class SummarizePipe implements PipeTransform {

  transform(value: string, limit: any): any {
    limit = (limit)?limit:30;
    console.log(limit);
     if(value){
      return value.substring(0,limit)+"...";
    }
  }

}
