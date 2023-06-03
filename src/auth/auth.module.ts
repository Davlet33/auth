import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { AccessTokenStrategy } from 'auth/strategy/accessToken.strategy';
import { RefreshTokenStrategy } from 'auth/strategy/refreshToken.strategy';
import { PrismaModule } from 'database/prisma.module';
import { UsersModule } from 'users/users.module';
import { UsersService } from 'users/users.service';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    forwardRef(() => UsersModule),
    JwtModule.register({}),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    UsersService,
    AccessTokenStrategy,
    RefreshTokenStrategy,
  ],
})
export class AuthModule {}
