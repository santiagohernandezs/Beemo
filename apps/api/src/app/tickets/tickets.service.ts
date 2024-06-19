import { Injectable } from '@nestjs/common';
import type { Ticket } from './ticket.entity';

@Injectable()
export class TicketsService {
  findAll(): Array<Ticket> {
    return [
      {
        id: '1',
        title: 'Create a NestJS app',
        body: 'Create a new NestJS app with the Nest CLI',
      },
      {
        id: '2',
        title: 'Create a new module',
        body: 'Create a new module with the Nest CLI',
      },
      {
        id: '3',
        title: 'Create a new service',
        body: 'Create a new service with the Nest CLI',
      },
    ];
  }
}
