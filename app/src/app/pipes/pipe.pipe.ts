import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {

  transform(value: string, args: string): boolean {
    if (value != undefined)
      return value.toLowerCase().includes(args.toLowerCase())
  }

}
