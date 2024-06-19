import { ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { apolloConfig, appModuleConfig, typeormConfig } from '../config/index';
import { appModules, appProviders } from './entries/index';

@Module({
  imports: [
    ConfigModule.forRoot(appModuleConfig),
    GraphQLModule.forRoot<ApolloDriverConfig>(apolloConfig),
    TypeOrmModule.forRootAsync(typeormConfig),
    ...appModules,
  ],
  providers: [...appProviders],
})
export class AppModule {}
