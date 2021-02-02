import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { UserDto } from '../../users/user.interface';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from '../auth.service';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super({
      usernameField: 'login',
    });
  }
  async validate(login: string, password: string): Promise<UserDto> {
    try {
      const user = await this.authService.validateUser(login, password);

      if (!user) {
        throw new NotFoundException('Wrong Login or Password');
      }

      return user;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
