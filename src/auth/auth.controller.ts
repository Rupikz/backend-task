import {
  Body,
  Post,
  HttpCode,
  UseGuards,
  HttpStatus,
  Controller,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { AuthUserDto } from '../users/dto';

@ApiBearerAuth()
@ApiTags('auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Авторизация' })
  @UseGuards(LocalAuthGuard)
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() authUserDto: AuthUserDto) {
    return this.authService.login(authUserDto);
  }
}
