import { Component, OnInit, Input, ViewEncapsulation, OnChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // encapsulation: ViewEncapsulation.None
  // defauylt is Emulated
  // encapsulation: ViewEncapsulation.None = Tira os custom atributes desse component do style os estulos desse componente vao ser aplicados globalmente
  // encapsulation: ViewEncapsulation.Native = Usa shadownDOM
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: { type: string, name: string, content: string }; // type javascript object
  // decorator @input() tells that this proprety can be assessible outside
  // inside the input is the alias, the name for acess outside

  @Input('export') novaVariavel: any;

  
  constructor() { 
    console.log('1 - constructer cal')
  }

  ngOnInit() {
    //console.log(this.novaVariavel)
    this.novaVariavel();
    console.log('2 - NgonInit cal')
  }

  ngOnChanges() {
    console.log('3 - ngOnChanges cal')
  }


}
