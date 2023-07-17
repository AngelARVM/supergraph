import { Module } from '@nestjs/common';
import { PostResolver } from './resolvers/post.resolver';
import { PostService } from './post.service';
import { UsersResolver } from './resolvers/user.resolver';

@Module({ providers: [PostResolver, PostService, UsersResolver] })
export class PostModule {}
