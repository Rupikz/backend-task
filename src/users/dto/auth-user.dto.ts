import { MinLength, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthUserDto {
  @ApiProperty({
    example: 'admin',
    description: 'User login',
  })
  @IsNotEmpty()
  login: string;

  @ApiProperty({
    example: 'password',
    description: 'User password',
    minimum: 6,
  })
  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
