import {
  Controller,
  Get,
  Post,
  Patch,
  Param,
  HttpStatus,
  HttpCode,
  Body,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/request/user.request';
import { CreateUserDto } from './dto/create-user.dto';
import { ResponseDto } from './dto/response/user.response';

@Controller('api')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('users/id/:id')
  @HttpCode(HttpStatus.OK)
  getUser(@Param() params): Promise<ResponseDto> {
    return this.usersService.getUser(params.id);
  }

  @Get('users/:page')
  @HttpCode(HttpStatus.OK)
  getUsers(@Param() params): Promise<ResponseDto> {
    return this.usersService.getUsers(params.page);
  }

  @Post('users')
  @HttpCode(HttpStatus.OK)
  create(@Body() createUserDto: CreateUserDto): Promise<ResponseDto> {
    return this.usersService.create(createUserDto);
  }

  @Patch('users/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param() params, @Body() userDto: UserDto): Promise<ResponseDto> {
    return this.usersService.update(params.id, userDto);
  }

  @Post('users/login')
  authorization(@Body() userDto: UserDto): Promise<ResponseDto> {
    return this.usersService.authorization(userDto);
  }
}
