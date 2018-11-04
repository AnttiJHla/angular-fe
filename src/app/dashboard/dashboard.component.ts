import { Component, OnInit } from '@angular/core';
import { Server } from '../server';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  servers: Server[] = [];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.getServers();
  }

  getServers(): void {
    this.serverService.getServers()
      .subscribe(servers => this.servers = servers.slice(1, 5));
  }
}