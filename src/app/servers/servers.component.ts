import { Component, OnInit } from '@angular/core';
import { Server } from '../server';
import { ServerService } from '../server.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  servers: Server[];
  selectedServer: Server;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.getServers();
  }

  onSelect(server: Server): void {
    this.selectedServer = server;
  }

  getServers(): void {
    this.serverService.getServers()
        .subscribe(servers => this.servers = servers);
  }
}
