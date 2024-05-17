import { MigrationInterface, QueryRunner } from 'typeorm';

export class AddJWTTokenToUserTable1715962760493 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(
      `ALTER TABLE user ADD jwt_token VARCHAR(255) NULL DEFAULT NULL;`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`ALTER TABLE user DROP COLUMN jwt_token;`);
  }
}
