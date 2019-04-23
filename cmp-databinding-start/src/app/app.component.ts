import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
  { type: 'server', name: 'TestServer', content: 'Just a test!!'},
  { type: 'server', name: 'TestsssServer', content: 'Jsdsdsdsdsdssds'},
  { type: 'server', name: 'TestServer', content: 'Just a test!!'}
  ];

  ngOnInit() {
    console.log('teste');
  }

}
