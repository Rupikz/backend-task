import {
  Injectable,
  HttpStatus,
  HttpException,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { AuthUserDto } from './dto';
import { Users } from './users.entity';
import { UserDto } from './user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { ResponseDto } from './dto/response/user.response';
import { getManager, Repository, Connection } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private connection: Connection,
  ) {}

  async findUserByLogin(login: string): Promise<AuthUserDto> {
    try {
      const user = await getManager()
        .createQueryBuilder(Users, 'users')
        .select([
          'users.id',
          'users.login',
          'users.password',
          'users.username',
          'users.age',
        ])
        .where('users.login = :login', { login })
        .getOne();

      if (!user) {
        throw new NotFoundException('Wrong Login or Password');
      }

      return user;
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  async getUser(id: number): Promise<ResponseDto> {
    try {
      const user = await getManager()
        .createQueryBuilder(Users, 'users')
        .select(['users.login', 'users.username', 'users.age'])
        .where('users.id = :id', { id })
        .getOne();

      if (!user) {
        throw new NotFoundException('User Not Found');
      }

      return {
        statusCode: HttpStatus.OK,
        data: user,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
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
        .orderBy('users.id', 'ASC')
        .getMany();

      if (!users.length) {
        throw new NotFoundException('Users Not Found');
      }

      return {
        statusCode: HttpStatus.OK,
        data: users,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  async create(data: UserDto): Promise<ResponseDto> {
    const user = new Users();

    user.login = data.login;
    user.password = data.password;
    user.username = data.username;
    user.age = data.age;

    try {
      await this.connection.transaction(async (manager) => {
        await manager.save(user);
      });
      return {
        statusCode: HttpStatus.OK,
        message: 'User Created',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }

  async update(id: number, data: UserDto): Promise<ResponseDto> {
    if (!Object.keys(data).length) {
      throw new BadRequestException();
    }

    try {
      const user = await this.usersRepository.findOne(id);

      user.username = data.username || user.username;
      user.password = data.password || user.password;
      user.age = data.age || user.age;

      await this.connection.transaction(async (manager) => {
        await manager.save(user);
      });

      return {
        statusCode: HttpStatus.OK,
        message: 'User Updated',
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.FORBIDDEN);
    }
  }
}
