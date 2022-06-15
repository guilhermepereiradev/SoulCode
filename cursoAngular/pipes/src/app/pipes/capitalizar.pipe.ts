import { ArrayType } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizar'
})
export class CapitalizarPipe implements PipeTransform {

  // "text" | uppercase
  transform(value: string): string {
    return value.split(" ").map((palavra) => {
      const primeiroChar = palavra[0];
      const resto = palavra.slice(1);
      
      return primeiroChar.toUpperCase()+resto.toLocaleLowerCase();
    }).join(" ")
  }

}
