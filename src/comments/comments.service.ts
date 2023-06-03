import { Injectable } from '@nestjs/common';
import { PrismaService } from 'database/prisma.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentsService {
  constructor(private prisma: PrismaService) {}
  async create(commentDto: CreateCommentDto) {
    const { name, comment, post_id } = commentDto;
    return await this.prisma.comment.create({
      data: { name: name, comment: comment, postId: post_id },
    });
  }

  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
