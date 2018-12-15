import {Injectable} from '@angular/core';

export const CHARACTERS_az: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
export const CHARACTERS_AZ: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
export const CHARACTERS_09: string[] = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

export const CHARACTERS_azAZ09: string[] = [...CHARACTERS_az, ...CHARACTERS_AZ, ...CHARACTERS_09];
export const LENGTH: number = CHARACTERS_azAZ09.length;

@Injectable({
  providedIn: 'root'
})
export class GeneratorService {

  length: number;

  constructor(private number: number, private chars: string[] = CHARACTERS_azAZ09) {
    this.length = chars.length;
  }

  generate(): string {
    let text = '';

    for (let i = 0; i < this.length; i++) {
      text += this.chars[Math.floor(Math.random() * this.length)];
    }

    return text;
  }
}

export function GeneratorServiceFactory(number: number, chars: string[]) {
  return function () {
    return new GeneratorService(number, chars);
  };
}
