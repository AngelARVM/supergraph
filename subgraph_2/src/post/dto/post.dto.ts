//post class decorated properly to be resolved by the gateway
import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { User } from './user.dto';

@ObjectType()
@Directive('@key(fields: "authorId")')
@Directive('@key(fields: "id")')
@Directive('@extends')
export class Post {
  @Field(() => Int)
  id: number;

  @Field()
  title: string;

  @Field()
  content: string;

  @Field(() => Int)
  authorId: number;

  @Field(() => User, { nullable: true })
  author?: User;
}
