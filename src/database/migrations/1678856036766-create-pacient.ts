import { MigrationInterface, QueryRunner } from "typeorm";

export class createPacient1678856036766 implements MigrationInterface {
    name = 'createPacient1678856036766'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "pacient_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, "age" integer NOT NULL, "problem" character varying NOT NULL, "problemSeverity" integer NOT NULL, "weight" integer NOT NULL, "allergies" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "userId" uuid, CONSTRAINT "PK_0fcae822b170c9637741a60678c" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE INDEX "IDX_a1cf7b4428f6cecd86aa5f39b7" ON "pacient_entity" ("firstName", "lastName") `);
        await queryRunner.query(`ALTER TABLE "pacient_entity" ADD CONSTRAINT "FK_f317075ad4a1f3ccaaf95e2a6f7" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pacient_entity" DROP CONSTRAINT "FK_f317075ad4a1f3ccaaf95e2a6f7"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_a1cf7b4428f6cecd86aa5f39b7"`);
        await queryRunner.query(`DROP TABLE "pacient_entity"`);
    }

}
