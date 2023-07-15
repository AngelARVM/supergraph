import {
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import { User } from '../dto/user.dto';
import { UserService } from '../user.service';
import { Post } from '../dto/post.dto';

@Resolver(User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Query(() => [User])
  async users(): Promise<User[]> {
    return this.userService.users;
  }

  @ResolveReference()
  async resolveReference(reference: {
    __typename: string;
    id: number;
  }): Promise<User> {
    this.userService.logger.debug({
      event: 'resolveReference',
      reference,
    });
    console.log({ reference });
    return await this.userService.getUserById(reference.id);
  }
}
