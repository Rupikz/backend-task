import { MigrationInterface, QueryRunner } from 'typeorm';
import * as randomstring from 'randomstring';
import * as bcrypt from 'bcryptjs';

export class AddUsers1611994825893 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const saltOrRounds = 10;
    const passwordAdminHash = await bcrypt.hash('admin', saltOrRounds);
    const config = {
      length: 10,
      charset: 'alphabetic',
      capitalization: 'lowercase',
    };

    queryRunner.manager.query(
      `INSERT INTO "users"("login", "password", "username", "age") VALUES ('admin', '${passwordAdminHash}', 'admin', 20)`,
    );
    for (let i = 0; i < 100; i += 1) {
      const login = randomstring.generate(config);
      const passwordHash = await bcrypt.hash(login, saltOrRounds);
      const username = randomstring.generate(config);
      const age = Math.floor(Math.random() * Math.floor(100));

      queryRunner.manager.query(
        `INSERT INTO "users"("login", "password", "username", "age") VALUES ('${login}', '${passwordHash}', '${username}', ${age})`,
      );
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
