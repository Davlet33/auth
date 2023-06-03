import { Injectable } from '@nestjs/common';
import { PrismaService } from 'database/prisma.service';
import { User } from 'prisma-client';
import { CreateUserDto } from 'users/dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({ data: { ...dto } });
  }

  async findByEmail(email: string): Promise<User> {
    return this.prisma.user.findFirst({ where: { email } });
  }

  async findById(id): Promise<User> {
    return this.prisma.user.findFirst({ where: { id } });
  }

  async update(id: number, refresh) {
    await this.prisma.user.update({
      where: { id },
      select: { refresh_token: true },
      data: { refresh_token: refresh.refresh_token },
    });
  }
}
