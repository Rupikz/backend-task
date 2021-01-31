import { UserDto } from '../request/user.request';

export interface ResponseDto {
  statusCode: number;
  message?: string;
  error?: string;
  data?: UserDto[] | UserDto;
}
