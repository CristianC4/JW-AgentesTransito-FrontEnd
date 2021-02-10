import { Component, OnInit } from '@angular/core';
import { AgentDTO } from 'src/app/Model/AgentDTO';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-delete-agent',
  templateUrl: './delete-agent.component.html',
  styleUrls: ['./delete-agent.component.css']
})
export class DeleteAgentComponent implements OnInit {
  id_agent: String = "";
  constructor(private router: Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  deleteAgent(id_agent: String) {
    this.service.deleteAgent(id_agent).subscribe(data => { alert("Agente Eliminado!!")});
  }

}
