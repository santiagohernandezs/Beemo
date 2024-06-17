import { Query, Resolver } from '@nestjs/graphql';
import { Ticket } from './ticket.entity';
import { TicketsService } from './tickets.service';

@Resolver(() => Ticket)
export class TicketsResolver {
  constructor(private readonly ticketsService: TicketsService) {}

  @Query(() => [Ticket])
  tickets() {
    return this.ticketsService.findAll();
  }
}
