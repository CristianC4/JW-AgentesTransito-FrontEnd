import { Component, OnInit } from '@angular/core';
import { HistoricDTO } from 'src/app/Model/HistoricDTO';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-create-historic',
  templateUrl: './create-historic.component.html',
  styleUrls: ['./create-historic.component.css']
})
export class CreateHistoricComponent implements OnInit {
  title = 'Historicos';
  historic: HistoricDTO = new HistoricDTO();
  constructor(private router: Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  createHistoric(historic: HistoricDTO) {
    console.log(historic);
    this.service.createHistoric(this.historic).subscribe(data => {
      if (historic == null) {
        alert("No se pudo realizar el registro!!");
      } else {
        alert("Se registro con exito la Asignacion!");
      }      
      this.router.navigate(["search"]);
    })
  }

}
