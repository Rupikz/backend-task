import { UserDto } from '../../user.interface';

export interface ResponseDto {
  statusCode: number;
  message?: string;
  error?: string;
  data?: UserDto[] | UserDto;
}
