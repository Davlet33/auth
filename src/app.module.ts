import { Module } from '@nestjs/common';
import { PrismaModule } from 'database/prisma.module';
import { PrismaService } from 'database/prisma.service';
import { UsersService } from 'users/users.service';
import { UsersModule } from 'users/users.module';
import { PostsModule } from 'posts/posts.module';
import { CommentsModule } from 'comments/comments.module';
import { AuthModule } from 'auth/auth.module';

@Module({
  imports: [UsersModule, PostsModule, CommentsModule, PrismaModule, AuthModule],
  providers: [UsersService, PrismaService],
})
export class AppModule {}
