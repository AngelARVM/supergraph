//post class decorated properly to be resolved by the gateway
import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { User } from './user.dto';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => Int)
  @Directive('@external')
  id: number;

  @Directive('@external')
  @Field()
  title: string;

  @Directive('@external')
  @Field()
  content: string;

  @Directive('@external')
  @Field(() => Int)
  authorId: number;

  @Field(() => User)
  author?: User;
}
