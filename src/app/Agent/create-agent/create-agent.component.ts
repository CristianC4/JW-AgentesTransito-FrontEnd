import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { AgentDTO } from 'src/app/Model/AgentDTO';

@Component({
  selector: 'app-create-agent',
  templateUrl: './create-agent.component.html',
  styleUrls: ['./create-agent.component.css']
})
export class CreateAgentComponent implements OnInit {
  title = 'Agentes';
  agent: AgentDTO = new AgentDTO();
  constructor(private router: Router, private service:ServiceService) { }

  ngOnInit(): void {
  }
  createAgent(agent: AgentDTO) {
    console.log(agent);
    this.service.createAgent(this.agent).subscribe(data => {
      alert("Se registro con exito el Agente!");
      this.router.navigate(["list-agent"]);
    })
  }
}