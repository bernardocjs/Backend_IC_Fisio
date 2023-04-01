import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";
import { EntityHelper } from "src/utils/entity-helper";
import { FileEntity } from "src/files/entities/file.entity";
import { User } from "src/users/entities/user.entity";
import { PacientEntity } from "src/pacient/entities/pacient.entity";

@Entity({ name: "session" })
export class SessionEntity extends EntityHelper {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  diagnosis: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  index: number;

  @Column()
  exercises: string;

  @ManyToOne(() => FileEntity, {
    eager: true,
  })
  photo?: FileEntity | null;

  @OneToOne(() => User, {
    eager: true,
  })
  sessionUser?: User;

  @ManyToOne(() => PacientEntity, (pacient) => pacient.session)
  sessionPacient: PacientEntity;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
