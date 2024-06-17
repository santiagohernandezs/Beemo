import { Module } from '@nestjs/common';
import { TicketsResolver } from './tickets.resolver';
import { TicketsService } from './tickets.service';

@Module({
  providers: [TicketsService, TicketsResolver],
})
export class TicketsModule {}
