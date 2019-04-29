import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
  { type: 'server', name: 'First Server', content: 'Just the first'},
  { type: 'server', name: 'Second', content: 'Second .. '}
  ];

  meuTeste = function () {
    console.log('fucntion test!!!!e');
  }

  ngOnInit() {
    //fifeCicle Hook
  }

  onServerAdded(serverData: {serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(bluePrintData: {serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: bluePrintData.serverName,
      content: bluePrintData.serverContent
    });
  }

  funcaoPai() {
    alert('Works!!!')
  }

  funcaoPaiParametros(parametro) {
    alert('funcaoPaiParametros --> ' + parametro.titulo);
    console.log(parametro)
  }

  onChangeFirst() {
    
  }

}
