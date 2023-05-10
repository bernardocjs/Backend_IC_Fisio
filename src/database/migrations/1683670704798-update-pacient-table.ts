import { MigrationInterface, QueryRunner } from "typeorm";

export class updatePacientTable1683670704798 implements MigrationInterface {
    name = 'updatePacientTable1683670704798'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP COLUMN "problem"`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP COLUMN "problemSeverity"`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP COLUMN "weight"`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP COLUMN "allergies"`);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "exams"`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD "gender" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD "ifChildWasItPremature" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD "ifChildHadIncurrenceDuringPregnancy" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD "ifChildHowWasChildbirth" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD "city" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD "state" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD "cep" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD "tel" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "session" ADD "name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "session" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "session" ADD "index" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "index"`);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "description"`);
        await queryRunner.query(`ALTER TABLE "session" DROP COLUMN "name"`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP COLUMN "tel"`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP COLUMN "cep"`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP COLUMN "city"`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP COLUMN "ifChildHowWasChildbirth"`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP COLUMN "ifChildHadIncurrenceDuringPregnancy"`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP COLUMN "ifChildWasItPremature"`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP COLUMN "gender"`);
        await queryRunner.query(`ALTER TABLE "session" ADD "exams" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD "allergies" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD "weight" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD "problemSeverity" integer NOT NULL`);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD "problem" character varying NOT NULL`);
    }

}
