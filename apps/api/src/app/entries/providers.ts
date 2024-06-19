import { TicketsResolver } from '../tickets/tickets.resolver';
import { TicketsService } from '../tickets/tickets.service';

const providers = [TicketsResolver, TicketsService];

export default providers;
