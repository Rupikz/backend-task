import { UsersModule } from './users/users.module';
import { TypeOrmConfig } from './config/ormconfig';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    UsersModule,
    AuthModule,
    TypeOrmModule.forRoot(TypeOrmConfig),
    ConfigModule.forRoot(),
  ],
})
export class AppModule {}
