import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Post } from './post.dto';

// user dto decorated with graphql decorators, also decorated with corresponding directives to federate in a apollo gateway
@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Directive('@external')
  @Field(() => Int)
  id: number;

  @Directive('@external')
  @Field()
  name: string;

  @Directive('@external')
  @Field()
  nickname: string;

  @Directive('@external')
  @Field()
  mail: string;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];
}
