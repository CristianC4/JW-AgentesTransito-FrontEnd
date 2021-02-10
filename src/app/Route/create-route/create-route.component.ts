import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { RouteDTO } from 'src/app/Model/RouteDTO';

@Component({
  selector: 'app-create-route',
  templateUrl: './create-route.component.html',
  styleUrls: ['./create-route.component.css']
})
export class CreateRouteComponent implements OnInit {
  title = 'Vias';
  route: RouteDTO = new RouteDTO();
  constructor(private router: Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  createRoute(route: RouteDTO) {
    console.log(route);
    this.service.createRoute(this.route).subscribe(data => {
      alert("Se registro con exito la via!");
      this.router.navigate(["list-route"]);
    })
  }
}
