import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { AgentDTO } from 'src/app/Model/AgentDTO';

@Component({
  selector: 'app-update-agent',
  templateUrl: './update-agent.component.html',
  styleUrls: ['./update-agent.component.css']
})
export class UpdateAgentComponent implements OnInit {
  agent: AgentDTO = new AgentDTO();
  constructor(private router: Router, private service:ServiceService) { }
  ngOnInit(): void {
  }
  updateAgent(agent: AgentDTO) {
    console.log(agent);
    this.service.updateAgent(this.agent).subscribe(data => {
      this.agent = data;
      alert("Agente actualizado con exito!");
      this.router.navigate(["list-agent"]);
    })
  }
}