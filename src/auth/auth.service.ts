import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { UserDto } from '../users/dto/request/user.request';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(login: string, password: string) {
    try {
      const user = await this.usersService.findUserByLogin(login);
      const isPassValid = await compare(password, user.password);

      if (user && isPassValid) {
        return user;
      }

      return null;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  async login(user: UserDto) {
    const payload = {
      id: user.id,
      login: user.login,
      username: user.username,
      age: user.age,
    };

    return {
      statusCode: HttpStatus.OK,
      data: {
        access_token: this.jwtService.sign(payload),
      },
    };
  }
}
