import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from '../dto/post.dto';
import { User } from '../dto/user.dto';
import { PostService } from '../post.service';

@Resolver((of) => User)
export class UsersResolver {
  constructor(private readonly postsService: PostService) {}

  @ResolveField((of) => [Post])
  public posts(@Parent() user: User): Post[] {
    return this.postsService.forAuthor(user.id);
  }
}
