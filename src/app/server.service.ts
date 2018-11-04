import { Injectable } from '@angular/core';
import { Server } from './server';
import { SERVERS } from './mock-servers';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  constructor(private messageService: MessageService) { }

  getServers(): Observable<Server[]> {
    this.messageService.add('ServerService: fetched servers');
    return of(SERVERS);
  }
}
