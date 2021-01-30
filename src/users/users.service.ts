import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { Users } from './users.entity';
import { ResponseDto } from './dto/response/user.response';
import { UserDto } from './dto/request/user.request';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async getUser(id: number): Promise<ResponseDto> {
    try {
      const user = await getManager()
        .createQueryBuilder(Users, 'users')
        .select(['users.login', 'users.username', 'users.age'])
        .where('users.id = :id', { id })
        .getOne();

      return {
        status: HttpStatus.OK,
        data: user,
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async getUsers(page: number): Promise<ResponseDto> {
    const limitEntries = 3;

    try {
      const users = await getManager()
        .createQueryBuilder(Users, 'users')
        .select(['users.id', 'users.username', 'users.age'])
        .limit(limitEntries)
        .offset((page - 1) * limitEntries)
        .getMany();
      return {
        status: HttpStatus.OK,
        data: users,
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async create(data: UserDto): Promise<ResponseDto> {
    const user = new Users();

    user.login = data.login;
    user.password = data.password;
    user.username = data.username;
    user.age = data.age;

    try {
      await this.usersRepository.save(user);
      return {
        status: HttpStatus.FORBIDDEN,
        message: 'User saved',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async update(id: number, data: UserDto): Promise<ResponseDto> {
    try {
      const user = await this.usersRepository.findOne(id);

      user.username = data.username || user.username;
      user.password = data.password || user.password;
      user.age = data.age || user.age;

      await this.usersRepository.save(user);
      return {
        status: HttpStatus.FORBIDDEN,
        message: 'User update',
      };
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: error.message,
        },
        HttpStatus.FORBIDDEN,
      );
    }
  }

  async authorization(data: UserDto): Promise<ResponseDto> {
    console.log(data);

    return {
      status: HttpStatus.FORBIDDEN,
      message: 'User login',
    };
  }
}
