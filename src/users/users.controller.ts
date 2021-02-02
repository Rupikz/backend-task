import {
  Get,
  Post,
  Body,
  Patch,
  Param,
  HttpCode,
  UseGuards,
  Controller,
  HttpStatus,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBody,
  ApiParam,
  ApiOperation,
  ApiBearerAuth,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiForbiddenResponse,
} from '@nestjs/swagger';
import { UsersService } from './users.service';
import { CreateUserDto, UpdateUserDto } from './dto';
import { ResponseDto } from './dto/response/user.response';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('users')
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ summary: 'Информация о пользователе' })
  @ApiOkResponse({ description: 'Данные пользователя' })
  @ApiNotFoundResponse({ description: 'Пользователь не найден' })
  @ApiParam({ name: 'id', type: Number })
  @Get('id:id')
  @HttpCode(HttpStatus.OK)
  getUser(@Param() params): Promise<ResponseDto> {
    return this.usersService.getUser(params.id);
  }

  @ApiOperation({ summary: 'Все пользователи' })
  @ApiOkResponse({ description: 'Массив пользователей' })
  @ApiForbiddenResponse({ description: 'Пользователи не найдены' })
  @ApiForbiddenResponse({ description: 'Неправильная страница' })
  @ApiParam({ name: 'page', type: Number })
  @Get(':page')
  @HttpCode(HttpStatus.OK)
  getUsers(@Param() params): Promise<ResponseDto> {
    return this.usersService.getUsers(params.page);
  }

  @ApiOperation({ summary: 'Создание нового пользователя' })
  @ApiCreatedResponse({ description: 'Пользователь создан' })
  @ApiForbiddenResponse({ description: 'Неправильные данные' })
  @ApiBody({ type: CreateUserDto })
  @ApiBearerAuth()
  @UseGuards(JwtAuthGuard)
  @Post('')
  @HttpCode(HttpStatus.OK)
  create(@Body() createUserDto: CreateUserDto): Promise<ResponseDto> {
    return this.usersService.create(createUserDto);
  }

  @ApiOperation({ summary: 'Обновление данных пользователя' })
  @ApiCreatedResponse({ description: 'Пользователь обновлен' })
  @ApiForbiddenResponse({ description: 'Неправильные данные' })
  @ApiBody({ type: UpdateUserDto })
  @ApiParam({ name: 'id', type: Number })
  @ApiBearerAuth()
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
