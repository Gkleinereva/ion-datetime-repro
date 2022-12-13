import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit, AfterViewInit {
  @ViewChild('myInput') myInput: IonInput;
  @Input() name: string;

  constructor() {}

  ngOnInit() {}

  public ngAfterViewInit(): void {
    console.log('Running without timeout');
    console.log(this.myInput.setFocus);
    this.myInput.setFocus();
  }

  // Still doesn't work on my machine
  // public ngAfterViewInit(): void {
  //   setTimeout(() => {
  //     console.log('Running with 5 second timeout');
  //     console.log(this.myInput.setFocus);
  //     this.myInput.setFocus();
  //   }, 5000);
  // }
}
