import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]', // pode ser um custom atribute, nao precisa ser exatamente uma tag <...>
  // selector: '.app-servers', // ou por uma classe 
  selector: '<app-servers>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = "TesteServer";
  serverCreated = false;
  servers = ['testeserver', 'testserve 2'];

  constructor() { 
    setTimeout( () => {
      this.allowNewServer = true;
    } ,2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated =true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is " + this.serverName;
  }

  onUpdateServerName(event: Event) {  // type Event
    console.log(event);
    // this.serverName = event.target.value;
    this.serverName = (<HTMLInputElement>event.target).value; // typescript sheets
    console.log(this.serverName);
  }
}
