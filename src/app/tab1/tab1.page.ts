import { Component, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  @ViewChild('myInput') myInput: IonInput;

  constructor() {}

  public ionViewDidEnter(): void {
    console.log('Running without timeout');
    console.log(this.myInput.setFocus);
    this.myInput.setFocus();
    console.log('hi');
  }
}
