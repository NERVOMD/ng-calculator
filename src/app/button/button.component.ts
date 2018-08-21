import {Component, OnInit} from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})


export class ButtonComponent implements OnInit {

  element = {};

  sendValue(value) {
    this.calculatorService.addValue(value);
  }

  sendOperator(value) {
    this.calculatorService.operator(value);
  }

  clearValue(value) {
    this.calculatorService.clearValue(value);
  }

    constructor(private calculatorService: CalculatorService) {
    }

    ngOnInit() {
      this.element = this.calculatorService.element;
    }
}
