import { SessionEntity } from "src/sessions/entities/session.entity";
import { User } from "src/users/entities/user.entity";
import { EntityHelper } from "src/utils/entity-helper";
import { Column, CreateDateColumn, DeleteDateColumn, Entity, Index, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

 @Entity()
  @Index(["firstName", "lastName"])
  export class PacientEntity extends EntityHelper {
     @PrimaryGeneratedColumn('uuid')
    id: string;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;

    @Column()
    gender: string;

    @Column()
    age: number;

    @Column()
    ifChildWasItPremature: string;

    @Column()
    ifChildHadIncurrenceDuringPregnancy: string;

    @Column()
    ifChildHowWasChildbirth: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    cep: string;

    @Column()
    tel: string;

    @ManyToOne(() => User, (user) => user.pacients)
    user: User;

    @OneToMany(() => SessionEntity, (session) => session.sessionPacient)
    session: SessionEntity[];

    @CreateDateColumn()
    createdAt: Date;
  
    @UpdateDateColumn()
    updatedAt: Date;
  
    @DeleteDateColumn()
    deletedAt: Date;
  }