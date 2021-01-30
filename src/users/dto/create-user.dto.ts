import { IsNotEmpty, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'admin',
    description: `Логин пользователя`,
  })
  @IsNotEmpty()
  readonly login: string;

  @ApiProperty({
    example: 'adminadmin',
    description: `Пароль пользователя, минимально 6 символов`,
  })
  @IsNotEmpty()
  @MinLength(6)
  readonly password: string;

  @ApiProperty({
    required: false,
    example: 'Rodrigo',
    description: `Имя пользователя`,
  })
  readonly username?: string;

  @ApiProperty({
    required: false,
    example: '25',
    description: `Возраст пользователя`,
  })
  readonly age?: number;
}
