import { Injectable } from '@nestjs/common';
import { Post } from './dto/post.dto';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class PostService {
  constructor(
    @InjectPinoLogger(PostService.name)
    public logger: PinoLogger,
  ) {}

  /* a posts array that have dummy data and match with Post dto*/

  posts: Post[] = [
    {
      id: 1,
      title: 'Post 1',
      content: 'Post 1 content',
      authorId: 1,
    },
    {
      id: 2,
      title: 'Post 2',
      content: 'Post 2 content',
      authorId: 1,
    },
    {
      id: 3,
      title: 'Post 3',
      content: 'Post 3 content',
      authorId: 2,
    },
  ];

  getPostById(id: number): Post {
    return this.posts.find((user) => user.id === id);
  }

  forAuthor(authorId: number): Post[] {
    return this.posts.filter((post) => post.authorId === authorId);
  }
}
