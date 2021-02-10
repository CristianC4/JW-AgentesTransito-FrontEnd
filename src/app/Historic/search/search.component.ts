import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { HistoricTableDTO } from '../../Model/HistoricTableDTO';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private service:ServiceService, private router:Router) { }
  table: String[] = [];
  street: String = "";
  number_street: number = 0;
  id_agent: String = "";
  ngOnInit(): void {
  }
  searchHistoricByAgent(id_agent: String) {
    this.service.listHistoricByAgent(id_agent).subscribe(data => {
      this.table.push(data);
    })
  }
  searchHistoricByStreet(street: String, number_street: number) {
    this.service.listHistoricByStreet(street, number_street).subscribe(data => {
      this.table.push(data);
    })
  }
}
