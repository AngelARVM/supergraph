import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Post } from './post.dto';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field((type) => Int)
  @Directive('@external')
  id: number;

  @Field((type) => [Post])
  posts?: Post[];
}
