import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsers1611994825893 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.manager.query(
      `INSERT INTO "users"("login", "password", "username", "age") VALUES ('admin', 'admin', 'admin', 20)`,
    );
    queryRunner.manager.query(
      `INSERT INTO "users"("login", "password", "username", "age") VALUES ('test', 'test', NULL, NULL)`,
    );
    queryRunner.manager.query(
      `INSERT INTO "users"("login", "password", "username", "age") VALUES ('user', 'user', 'user', 28)`,
    );
    queryRunner.manager.query(
      `INSERT INTO "users"("login", "password", "username", "age") VALUES ('mogu', 'password', 'Mogu', 22)`,
    );
    queryRunner.manager.query(
      `INSERT INTO "users"("login", "password", "username", "age") VALUES ('melle', 'password', 'Rrieyn', 22)`,
    );
    queryRunner.manager.query(
      `INSERT INTO "users"("login", "password", "username", "age") VALUES ('hatfisa', 'password', 'Kacka', 22)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
