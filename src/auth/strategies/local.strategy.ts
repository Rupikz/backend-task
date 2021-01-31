import { Injectable, UnauthorizedException } from '@nestjs/common';
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
  async validate(login: string, password: string): Promise<any> {
    try {
      const user = await this.authService.validateUser(login, password);
      return user;
    } catch (error) {
      throw new UnauthorizedException(error.message);
    }
  }
}
