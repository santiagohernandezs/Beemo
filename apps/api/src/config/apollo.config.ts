import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, type ApolloDriverConfig } from '@nestjs/apollo';

const config = {
  driver: ApolloDriver,
  autoSchemaFile: true,
  playground: false,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
} satisfies ApolloDriverConfig;

export default config;
