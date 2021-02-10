import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { AgentDTO } from '../../Model/AgentDTO';

@Component({
  selector: 'app-list-agent',
  templateUrl: './list-agent.component.html',
  styleUrls: ['./list-agent.component.css']
})
export class ListAgentComponent implements OnInit {
  agents: AgentDTO[] = [];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.service.getAgents().subscribe(data => {
      this.agents = data;
    })
  }
}