import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from 'users/dto/create-user.dto';
import { UsersService } from 'users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}

  @Post('/signup')
  async create(@Body() dto: CreateUserDto) {
    return await this.userService.create(dto);
  }
}
