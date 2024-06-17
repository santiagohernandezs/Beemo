import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TicketsModule } from './tickets/tickets.module';
import { TicketsResolver } from './tickets/tickets.resolver';
import { TicketsService } from './tickets/tickets.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    TicketsModule,
  ],
  providers: [TicketsService, TicketsResolver],
})
export class AppModule {}
