import { Injectable } from '@angular/core';
import {CalculatorService} from './calculator.service';

@Injectable({
  providedIn: 'root'
})
export class KeyService {

  key(key) {
    if ((key.keyCode > 47 && key.keyCode < 58) || key.keyCode === 190 || (key.keyCode > 95 && key.keyCode < 106)) {
      this.calculatorService.addValue(key.key);
    }
    if (key.keyCode === 8) {
      this.calculatorService.clearValue(key.key);
    }
    if (key.keyCode === 111 || key.Code === 106 || key.keyCode === 107 || key.keyCode === 109 || key.keyCode === 13) {
      if (key.key.keyCode === 13) {
        this.calculatorService.operator('=');
      } else {
        this.calculatorService.operator(key.key);
      }
    }
  }

  constructor(private calculatorService: CalculatorService) {
  }
}
