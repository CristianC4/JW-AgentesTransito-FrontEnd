import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-delete-route',
  templateUrl: './delete-route.component.html',
  styleUrls: ['./delete-route.component.css']
})
export class DeleteRouteComponent implements OnInit {
  id_route: number = 0;
  constructor(private router: Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  deleteRoute(id_route: number) {
    console.log("ID: "+id_route);
    this.service.deleteRoute(id_route).subscribe(data => {
      alert("Ruta Eliminada!!");
      this.router.navigate(["list-route"]);
    });
  }

}
