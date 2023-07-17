//post class decorated properly to be resolved by the gateway
import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { User } from './user.dto';

@ObjectType()
@Directive('@key(fields: "id")')
@Directive('@key(fields: "authorId")')
@Directive('@extends')
export class Post {
  @Field(() => Int)
  @Directive('@external')
  id: number;

  @Field()
  @Directive('@external')
  title: string;

  @Field()
  @Directive('@external')
  content: string;

  @Field(() => Int)
  @Directive('@external')
  authorId: number;

  @Field(() => User)
  author?: User;
}
