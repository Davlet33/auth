import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { RefreshTokenGuard } from 'auth/guards/refreshToken.guard';
import { IRequestWithUser } from 'types/types';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/signup')
  create(@Body() data: CreateAuthDto) {
    return this.authService.create(data);
  }

  @Post('/signin')
  login(@Body() data: CreateAuthDto) {
    return this.authService.signIn(data);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('/refresh')
  refreshTokens(@Req() req: IRequestWithUser) {
    const userId = req.user['sub'];
    const refreshToken = req.user['refreshToken'];
    return this.authService.refreshTokens(userId, refreshToken);
  }

  @Get('logout')
  logout(@Req() req: IRequestWithUser) {
    this.authService.logout(req.user['sub']);
  }
}
