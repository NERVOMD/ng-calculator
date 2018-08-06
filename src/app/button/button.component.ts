import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  element = {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    operators: ['+', '-', '*', '/', '='],
    clear: ['CE', 'C', '<-'],
    other: [',', '+/-']
  };

  writeInLabel(value) {

  }

  constructor() { }

  ngOnInit() {
  }

}
