import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './Historic/search/search.component';
import { CreateAgentComponent } from './Agent/create-agent/create-agent.component';
import { AssignAgentComponent } from './Agent/assign-agent/assign-agent.component';
import { DeleteAgentComponent } from './Agent/delete-agent/delete-agent.component';
import { ListAgentComponent } from './Agent/list-agent/list-agent.component';
import { UpdateAgentComponent } from './Agent/update-agent/update-agent.component';
import { CreateRouteComponent } from './Route/create-route/create-route.component';
import { DeleteRouteComponent } from './Route/delete-route/delete-route.component';
import { ListRouteComponent } from './Route/list-route/list-route.component';
import { UpdateRouteComponent } from './Route/update-route/update-route.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Service/service.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateHistoricComponent } from './Historic/create-historic/create-historic.component'

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CreateAgentComponent,
    AssignAgentComponent,
    DeleteAgentComponent,
    ListAgentComponent,
    UpdateAgentComponent,
    CreateRouteComponent,
    DeleteRouteComponent,
    ListRouteComponent,
    UpdateRouteComponent,
    CreateHistoricComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
