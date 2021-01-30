import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { TypeOrmConfig } from './config/ormconfig';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(TypeOrmConfig)],
})
export class AppModule {}
