import { Component } from '@angular/core'; // 


@Component({ // Typescript dont know this thing so, we need import, inside this component we pass a object
    selector: 'app-server', // The person html
    templateUrl: './server.component.html', // precisamos de um patch relativo ./ por causa do webpack
    styles: [`
        .online {
            color: white;
        }
            `]
}) 

export class ServerComponent { // we need export this class to be able to use outside of this file, no app component por exemplo
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getserverStatus() {
        return this.serverStatus;
    }

    getColor() {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}