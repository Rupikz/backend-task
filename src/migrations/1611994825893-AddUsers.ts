import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddUsers1611994825893 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.manager.query(
      `INSERT INTO "users"("id", "createDateTime", "updateDateTime", "login", "password", "username", "age") VALUES ('1', DEFAULT, DEFAULT, 'admin', 'admin', 'admin', 20)`,
    );
    queryRunner.manager.query(
      `INSERT INTO "users"("id", "createDateTime", "updateDateTime", "login", "password", "username", "age") VALUES ('2', DEFAULT, DEFAULT, 'test', 'test', NULL, NULL)`,
    );
    queryRunner.manager.query(
      `INSERT INTO "users"("id", "createDateTime", "updateDateTime", "login", "password", "username", "age") VALUES ('3', DEFAULT, DEFAULT, 'user', 'user', 'user', 28)`,
    );
    queryRunner.manager.query(
      `INSERT INTO "users"("id", "createDateTime", "updateDateTime", "login", "password", "username", "age") VALUES ('4', DEFAULT, DEFAULT, 'mogu', 'password', 'Mogu', 22)`,
    );
    queryRunner.manager.query(
      `INSERT INTO "users"("id", "createDateTime", "updateDateTime", "login", "password", "username", "age") VALUES ('5', DEFAULT, DEFAULT, 'melle', 'password', 'Rrieyn', 22)`,
    );
    queryRunner.manager.query(
      `INSERT INTO "users"("id", "createDateTime", "updateDateTime", "login", "password", "username", "age") VALUES ('6', DEFAULT, DEFAULT, 'hatfisa', 'password', 'Kacka', 22)`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
