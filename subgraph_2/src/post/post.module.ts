import { Module } from '@nestjs/common';
import { PostResolver } from './resolvers/post.resolver';
import { PostService } from './post.service';
import { UserResolver } from './resolvers/user.resolver';

@Module({ providers: [PostResolver, PostService, UserResolver] })
export class PostModule {}
