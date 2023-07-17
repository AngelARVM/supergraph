import {
  Parent,
  Query,
  ResolveField,
  ResolveProperty,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../dto/user.dto';
import { UserService } from '../user.service';
import { Post } from '../dto/post.dto';
import { GraphQLFieldResolver } from 'graphql';

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.users;
  }

  @Query(() => User)
  async user(): Promise<User> {
    return this.userService.getUserById(1);
  }

  @ResolveField(() => Post)
  posts(@Parent() user: User): any {
    console.log({ context: 'User Graph - resolve property', user });
    return { __typename: 'Post', authorId: user.id };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): User {
    return this.userService.getUserById(reference.id);
  }
}
