import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableIndex,
} from 'typeorm';

export class UsersTable1611945661778 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          new TableColumn({
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          }),
          new TableColumn({
            name: 'createDateTime',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          }),
          new TableColumn({
            name: 'login',
            type: 'varchar',
            isNullable: false,
          }),
          new TableColumn({
            name: 'password',
            type: 'varchar',
            isNullable: false,
          }),
          new TableColumn({
            name: 'username',
            type: 'varchar',
            isNullable: true,
          }),
          new TableColumn({
            name: 'age',
            type: 'int',
            isNullable: true,
          }),
          new TableColumn({
            name: 'updateDateTime',
            type: 'timestamp',
            isNullable: false,
            default: 'now()',
          }),
        ],
      }),
      false,
    );

    await queryRunner.createIndex(
      'users',
      new TableIndex({
        name: 'IDX_QUESTION_NAME',
        columnNames: ['login'],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
    await queryRunner.dropIndex('users', 'IDX_QUESTION_NAME');
  }
}
