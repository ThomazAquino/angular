import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { stringify } from '@angular/core/src/render3/util';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serveCredted = new EventEmitter<{serverName: string, serverContent: string }>(); // = new EventEmitter<>() transforma essa variavel em um emitidor de evento, tem que importar fo angular core
  @Output('bpCreated') bluePrintCredted = new EventEmitter<{ serverName: string, serverContent: string }>(); // EventEmitteris a generic type 
  //  <type do event data> no nosos caso é um objeto. Depois acrescenta () para chamar o constructor do eventEmmter e criar um noov emiter object
// @output() passar algo para fora do component
  @Output() variavelFilho = new EventEmitter<{}>();
  @Output() variavelFilhoParametros = new EventEmitter<{titulo: string}>();
  
  newServerName = 'Nome do server...';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) { // this paramiter is because local reference, I use this in the html file
                            //nem sempre é preciso usar two way data binding
    console.log(nameInput.value) // now wehave the input from the html
    this.serveCredted.emit({serverName: nameInput.value, serverContent: this.newServerContent }); // call the emit() method = Emit a new event of this type
    this.variavelFilho.emit();
    this.variavelFilhoParametros.emit({ titulo: this.newServerName });
  }

  onAddBlueprint() {
    this.bluePrintCredted.emit({serverName: this.newServerName, serverContent: this.newServerContent }); 
  }

}
