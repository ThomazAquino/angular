import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css'] // styles e template podem ter Url ou ser passado inline, no caso do style e um array
  styles: [`    
    h3 {
      color: dodgerblue;;
    }
          `]
})
export class AppComponent {

}
