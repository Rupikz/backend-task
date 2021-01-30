import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('api')
export class UsersController {
  constructor(private readonly appService: UsersService) {}

  @Get('users')
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users/:page')
  getHello1(@Param() params): string {
    console.log(params.page);

    return this.appService.getHello();
  }
}
