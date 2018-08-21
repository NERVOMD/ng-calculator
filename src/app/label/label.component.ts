import { Component, OnInit } from '@angular/core';
import { CalculatorService } from '../calculator.service';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.less']
})
export class LabelComponent implements OnInit {

  firstLabel: string;
  secondLabel: string;

  constructor( private calculatorService: CalculatorService ) { }

  ngOnInit() {
    this.calculatorService.label1Observe.subscribe( label1 => this.firstLabel = label1 );
    this.calculatorService.label2Observe.subscribe(label2 => this.secondLabel = label2 );
  }

}
