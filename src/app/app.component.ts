import {Component} from '@angular/core';
import {KeyService} from './key.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  keyPress(key) {
    this.keyService.key(key);
    }

  constructor (private keyService: KeyService) {

  }
}
