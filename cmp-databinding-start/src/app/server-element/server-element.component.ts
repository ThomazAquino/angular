import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element: { type: string, name: string, content: string }; // type javascript object
  // decorator @input() tells that this proprety can be assessible outside
  // inside the input is the alias, the name for acess outside

  @Input() teste = 'teste';
  constructor() { }

  ngOnInit() {
    console.log('asas')
  }


}
