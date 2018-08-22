import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  number = '0';
  secondNumber = '';
  operatorTruth = '';
  lastPress = '';

  element = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    operators: ['+', '-', '*', '/', '='],
    clear: ['CE', 'C', 'backspace'],
    other: ['.', '+/-']
  };

  private label1 = new BehaviorSubject<string>(this.number);
  label1Observe = this.label1.asObservable();

  private label2 = new BehaviorSubject<string>(this.number);
  label2Observe = this.label2.asObservable();

  editNumber1(num1) {
    this.label1.next(num1);
  }

  editNumber2(num2) {
    this.label2.next(num2);
  }

  addValue(value) {
    if (value === '.' && !this.number.includes('.') && this.number.length !== 15) {
      this.number = this.number + value.toString();
    }
    if (value === '+/-') {
      this.number = (parseFloat(this.number) * -1).toString();
    }
    if (this.lastPress === '=' || this.number === '0' && !(value === '.' || value === '+/-')) {
      this.lastPress = '';
      this.number = value.toString();
    } else if ( value !== '0' && this.number.length !== 15 && !( value === '.' || value === '+/-')) {
      this.number = this.number + value.toString();
    }
    this.editNumber1(this.number);
  }

  operator(value) {
    if (value !== '=') {
      if (value === '/' && this.number !== '0' && this.operatorTruth === '') {
        this.secondNumber = this.number + '/';
        this.operatorTruth = '/';
      } else
      if (value === '-' && this.number !== '0' && this.operatorTruth === '') {
        this.secondNumber = this.number + ' -';
        this.operatorTruth = '-';
      } else
      if (value === '+' && this.number !== '0' && this.operatorTruth === '') {
        this.secondNumber = this.number + ' +';
        this.operatorTruth = '+';
      } else
      if (value === '*' && this.number !== '0' && this.operatorTruth === '') {
        this.secondNumber = this.number + ' *';
        this.operatorTruth = '*';
      }
      this.number = '0';
      this.editNumber1(this.number);
      this.editNumber2(this.secondNumber);
    } else if (value === '=' ) {
        if (this.operatorTruth === '/') {
          this.number = (parseFloat(this.secondNumber) / parseFloat(this.number)).toString();
        } else
      if (this.operatorTruth === '-') {
        this.number = (parseFloat(this.secondNumber) - parseFloat(this.number)).toString();
      } else
      if (this.operatorTruth === '+') {
        this.number = (parseFloat(this.secondNumber) + parseFloat(this.number)).toString();
      } else
      if (this.operatorTruth === '*') {
        this.number = (parseFloat(this.secondNumber) * parseFloat(this.number)).toString();
      }
      this.secondNumber = '';
      this.operatorTruth = '';
      this.lastPress = '=';
      this.editNumber1(this.number);
      this.editNumber2(this.secondNumber);
    }
  }

  clearValue(value) {
    if (value === 'C') {
      this.secondNumber = '';
      this.number = '0';
      this.operatorTruth = '';
    } else if (value === 'CE') {
      this.number = '0';
    } else if (value.toLowerCase() === 'backspace') {
      if (this.number.length === 1) {
        this.number = '0';
      } else {
        this.number = this.number.substring(0, this.number.length - 1);
      }
    }
    this.editNumber1(this.number);
  }

  constructor() { }
}
