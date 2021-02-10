import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AgentDTO } from '../Model/AgentDTO';
import { RouteDTO } from '../Model/RouteDTO';
import { HistoricDTO } from '../Model/HistoricDTO';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  
  UrlAgents = 'http://localhost:8080/transito/agents';
  UrlRoutes = 'http://localhost:8080/transito/routes';
  UrlHistoric = 'http://localhost:8080/transito/historics';

  getAgents() {
    return this.http.get<AgentDTO[]>(this.UrlAgents);
  }
  createAgent(agent:AgentDTO) {
    return this.http.post<AgentDTO>(this.UrlAgents,agent);
  }
  updateAgent(agent: AgentDTO) {
    return this.http.put<AgentDTO>(`${this.UrlAgents}/${agent.id_agent}`,agent);
  }
  deleteAgent(id_agent: String) {
    return this.http.delete<AgentDTO>(`${this.UrlAgents}/${id_agent}`);
  }
  getRoutes() {
    return this.http.get<RouteDTO[]>(this.UrlRoutes);
  }
  createRoute(route:RouteDTO) {
    return this.http.post<RouteDTO>(this.UrlRoutes,route);
  }
  updateRoute(route: RouteDTO) {
    return this.http.put<RouteDTO>(`${this.UrlRoutes}/${route.id_route}`,route);
  }
  deleteRoute(id_route: number) {
    return this.http.delete<RouteDTO>(`${this.UrlRoutes}/${id_route}`);
  }
  listHistoricByAgent(id_agent: String) {
    return this.http.get<String>(`${this.UrlHistoric}/${id_agent}`);
   }
  listHistoricByStreet(street: String, number_street: number) {
    return this.http.get<String>(`${this.UrlHistoric}/${street}/${number_street}`);
  }
  createHistoric(historic: HistoricDTO) {
    return this.http.post<HistoricDTO>(`${this.UrlHistoric}`,historic);
  }
}