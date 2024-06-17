import { Injectable } from '@nestjs/common';
import type { Ticket } from './ticket.entity';

@Injectable()
export class TicketsService {
  findAll(): Array<Ticket> {
    return [
      {
        id: '1',
        title: 'Create a NestJS app',
        description: 'Create a new NestJS app with the Nest CLI',
      },
      {
        id: '2',
        title: 'Create a new module',
        description: 'Create a new module with the Nest CLI',
      },
      {
        id: '3',
        title: 'Create a new service',
        description: 'Create a new service with the Nest CLI',
      },
    ];
  }
}
