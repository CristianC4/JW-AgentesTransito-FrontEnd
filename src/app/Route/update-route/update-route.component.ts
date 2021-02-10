import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { RouteDTO } from 'src/app/Model/RouteDTO';

@Component({
  selector: 'app-update-route',
  templateUrl: './update-route.component.html',
  styleUrls: ['./update-route.component.css']
})
export class UpdateRouteComponent implements OnInit {
  route: RouteDTO = new RouteDTO();
  constructor(private router: Router, private service:ServiceService) { }
  ngOnInit(): void {
  }
  updateRoute(route: RouteDTO) {
    console.log(route);
    this.service.updateRoute(this.route).subscribe(data => {
      this.route = data;
      alert("Ruta actualizado con exito!");
      this.router.navigate(["list-route"]);
    })
  }
}
