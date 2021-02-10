import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignAgentComponent } from './Agent/assign-agent/assign-agent.component';
import { CreateAgentComponent } from './Agent/create-agent/create-agent.component';
import { DeleteAgentComponent } from './Agent/delete-agent/delete-agent.component';
import { ListAgentComponent } from './Agent/list-agent/list-agent.component';
import { UpdateAgentComponent } from './Agent/update-agent/update-agent.component';
import { CreateHistoricComponent } from './Historic/create-historic/create-historic.component';
import { SearchComponent } from './Historic/search/search.component';
import { CreateRouteComponent } from './Route/create-route/create-route.component';
import { DeleteRouteComponent } from './Route/delete-route/delete-route.component';
import { ListRouteComponent } from './Route/list-route/list-route.component';
import { UpdateRouteComponent } from './Route/update-route/update-route.component';

const routes: Routes = [
  { path: 'assign-agent', component: AssignAgentComponent },
  { path: 'create-agent', component: CreateAgentComponent },
  { path: 'delete-agent', component: DeleteAgentComponent },
  { path: 'list-agent', component: ListAgentComponent },
  { path: 'update-agent', component: UpdateAgentComponent },
  { path: 'search', component: SearchComponent },
  { path: 'create-route', component: CreateRouteComponent },
  { path: 'delete-route', component: DeleteRouteComponent },
  { path: 'list-route', component: ListRouteComponent },
  { path: 'update-route', component: UpdateRouteComponent },
  { path:'create-historic', component: CreateHistoricComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
