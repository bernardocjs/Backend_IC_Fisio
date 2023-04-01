import { MigrationInterface, QueryRunner } from "typeorm";

export class SessionTable1678860806812 implements MigrationInterface {
    name = 'SessionTable1678860806812'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "session" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "exams" character varying NOT NULL, "diagnosis" character varying NOT NULL, "exercises" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "photoId" uuid, "sessionPacientId" uuid, CONSTRAINT "PK_f55da76ac1c3ac420f444d2ff11" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "session" ADD CONSTRAINT "FK_fa982483fe96bcba2d784623487" FOREIGN KEY ("photoId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "session" ADD CONSTRAINT "FK_84d375725dede6c939b76eb9a27" FOREIGN KEY ("sessionPacientId") REFERENCES "pacient_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "session" DROP CONSTRAINT "FK_84d375725dede6c939b76eb9a27"`);
        await queryRunner.query(`ALTER TABLE "session" DROP CONSTRAINT "FK_fa982483fe96bcba2d784623487"`);
        await queryRunner.query(`DROP TABLE "session"`);
    }

}
