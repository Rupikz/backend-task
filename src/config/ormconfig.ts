import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';

dotenv.config();

export const TypeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',

  host: process.env.POSTGRES_HOST,
  port: parseInt(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,

  migrationsRun: true,
  synchronize: false,

  entities: ['dist/**/*.entity{.ts,.js}'],

  migrationsTableName: 'migrations',
  migrations: ['dist/migrations/*{.ts,.js}'],

  cli: {
    migrationsDir: 'src/migrations',
  },

  ssl: false,
};
