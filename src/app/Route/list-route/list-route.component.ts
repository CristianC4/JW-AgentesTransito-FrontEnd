import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { RouteDTO } from '../../Model/RouteDTO';

@Component({
  selector: 'app-list-route',
  templateUrl: './list-route.component.html',
  styleUrls: ['./list-route.component.css']
})
export class ListRouteComponent implements OnInit {
  routes: RouteDTO[] = [];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getRoutes().subscribe(data => {
      this.routes = data;
    })
  }

}
