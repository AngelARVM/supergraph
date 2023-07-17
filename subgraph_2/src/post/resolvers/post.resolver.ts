import {
  Args,
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import { Post } from '../dto/post.dto';
import { PostService } from '../post.service';
import { User } from '../dto/user.dto';

@Resolver(Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return this.postService.posts;
  }

  @Query(() => [Post])
  async postsByAuthorId(@Args('authorId') authorId: number): Promise<Post[]> {
    return this.postService.forAuthor(authorId);
  }

  @ResolveField((of) => User)
  author(@Parent() post: Post): any {
    console.log({ context: 'Post graph - resolve field', post });
    return { __typename: 'User', id: post.authorId };
  }

  @ResolveField((of) => User)
  user(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }
}
