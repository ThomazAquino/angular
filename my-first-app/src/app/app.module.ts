import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component'; // we need tell angular abouu our new component
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent // need import component before in the top
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // defines who will be the root component off our app, in this case the app component
  // feralmente componentes filhos ficam dentro da pasta app
})
export class AppModule { }

// app module 'e onde falamos ao angular qual pecas pertecem ao nosso app

