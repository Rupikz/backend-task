import { UserDto } from '../request/user.request';

export interface ResponseDto {
  status: number;
  message?: string;
  error?: string;
  data?: UserDto[] | UserDto;
}
