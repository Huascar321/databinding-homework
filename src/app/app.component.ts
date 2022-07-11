import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onGameStarted(data: {incrementalNumber: number}) {
    if (data.incrementalNumber % 2 === 0) {
      this.oddNumbers.push(data.incrementalNumber);
    } else {
      this.evenNumbers.push(data.incrementalNumber);
    }
  }
}
