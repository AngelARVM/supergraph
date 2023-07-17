import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { LoggerModule } from 'nestjs-pino';
import { UserModule } from './user/user.module';
import { ApolloServerPluginInlineTrace } from '@apollo/server/plugin/inlineTrace';
@Module({
  imports: [
    UserModule,
    LoggerModule.forRoot({
      pinoHttp: {
        level: 'trace',
        transport: {
          target: 'pino-pretty',
          options: {
            // singleLine: true,
          },
        },
      },
    }),
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      autoSchemaFile: 'schema.gql',
      plugins: [ApolloServerPluginInlineTrace()],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
