import {
  Parent,
  Query,
  ResolveField,
  ResolveReference,
  Resolver,
} from '@nestjs/graphql';
import { Post } from '../dto/post.dto';
import { PostService } from '../post.service';
import { Logger } from '@nestjs/common';
import { User } from '../dto/user.dto';

@Resolver(Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    return this.postService.posts;
  }

  @ResolveField((of) => User)
  author(@Parent() post: Post): any {
    return { __typename: 'User', id: post.authorId };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: number }): Post {
    this.postService.logger.debug({
      event: 'resolveReference',
      reference,
    });
    return this.postService.getPostById(reference.id);
  }
}
