import { MinLength, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
  @ApiProperty({
    required: false,
    minimum: 6,
    example: 'password',
    description: `New user password`,
  })
  @MinLength(6)
  @IsOptional()
  password: string;

  @ApiProperty({
    required: false,
    example: 'Donald',
    description: `New user name`,
  })
  @IsOptional()
  username: string;

  @ApiProperty({
    required: false,
    example: '25',
    description: `New user age`,
  })
  @IsOptional()
  age: number;
}
