import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  readonly login: string;

  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  readonly username?: string;

  readonly age?: number;
}
