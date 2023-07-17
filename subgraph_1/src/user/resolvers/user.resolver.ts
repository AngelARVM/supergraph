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

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): User {
    return this.userService.getUserById(reference.id);
  }
}
