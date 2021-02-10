import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AgentesTransito';
  constructor(private router: Router) {
  }
  registerAgent(){
    this.router.navigate(["create-agent"]);
  }
  deleteAgent() {
    this.router.navigate(["delete-agent"]);
  }
  updateAgent() {
    this.router.navigate(["update-agent"]);
  }
  assignRoute() {
    this.router.navigate(["assign-agent"])
  }
  listAgents() {
    this.router.navigate(["list-agent"]);
  }
  registerRoute() {
    this.router.navigate(["create-route"]);
  }
  deleteRoute() {
    this.router.navigate(["delete-route"]);
  }
  updateRoute() {
    this.router.navigate(["update-route"]);
  }
  listRoutes() {
    this.router.navigate(["list-route"]);
  }
  searchHistorics() {
    this.router.navigate(["search"]);
  }
  createHistoric() {
    this.router.navigate(["create-historic"])
  }
}
