import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Post } from './post.dto';

// user dto decorated with graphql decorators, also decorated with corresponding directives to federate in a apollo gateway
@ObjectType()
@Directive('@key(fields: "id")')
export class User {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  nickname: string;

  @Field()
  mail: string;

  @Field(() => [Post], { nullable: true })
  posts?: Post[];
}
