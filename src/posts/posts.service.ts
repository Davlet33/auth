import { Injectable } from '@nestjs/common';
import { PrismaService } from 'database/prisma.service';
import { IPost } from 'types/types';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePostDto) {
    return await this.prisma.post.create({ data });
  }

  async findAll(): Promise<IPost[]> {
    return await this.prisma.post.findMany({ include: { comments: true } });
  }

  async findOne(id: number) {
    return await this.prisma.post.findFirst({ where: { id } });
  }

  async update(id: number, updatePostDto: UpdatePostDto) {
    return await this.prisma.post.update({
      where: { id },
      data: { title: updatePostDto.title },
    });
  }

  async remove(id: number) {
    return await this.prisma.post.delete({ where: { id } });
  }
}
