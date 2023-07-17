import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Post } from './post.dto';

@ObjectType()
@Directive('@extends')
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
}
