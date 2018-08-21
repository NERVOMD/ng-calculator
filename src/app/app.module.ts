import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LabelComponent } from './label/label.component';
import { ButtonComponent } from './button/button.component';
import { CalculatorService } from './calculator.service';
import { KeyService } from './key.service';

@NgModule({
  declarations: [
    AppComponent,
    LabelComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CalculatorService, KeyService],
  bootstrap: [AppComponent]
})
export class AppModule {

}
