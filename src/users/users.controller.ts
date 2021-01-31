import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  HttpStatus,
  HttpCode,
  Body,
  UseGuards,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ResponseDto } from './dto/response/user.response';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiBearerAuth()
@ApiTags('users')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Информация о пользователе' })
  @ApiResponse({
    status: 200,
    description: 'Данные пользователя',
  })
  @Get('id:id')
  @HttpCode(HttpStatus.OK)
  getUser(@Param() params): Promise<ResponseDto> {
    return this.usersService.getUser(params.id);
  }

  @ApiOperation({ summary: 'Все пользователи' })
  @Get(':page')
  @HttpCode(HttpStatus.OK)
  getUsers(@Param() params): Promise<ResponseDto> {
    return this.usersService.getUsers(params.page);
  }

  @ApiOperation({ summary: 'Создание нового пользователя' })
  @UseGuards(JwtAuthGuard)
  @Post('users')
  @HttpCode(HttpStatus.OK)
  create(@Body() createUserDto: CreateUserDto): Promise<ResponseDto> {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Обновление данных пользователя' })
  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param() params,
    @Body() updateUserDto: UpdateUserDto,
  ): Promise<ResponseDto> {
    return this.usersService.update(params.id, updateUserDto);
  }
}
