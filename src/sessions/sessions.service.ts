import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateSessionDto } from "./dto/create-session.dto";
import { UpdateSessionDto } from "./dto/update-session.dto";
import { SessionEntity } from "./entities/session.entity";

@Injectable()
export class SessionsService {
  constructor(
    @InjectRepository(SessionEntity)
    private sessionsRepository: Repository<SessionEntity>
  ) {}
  create(userId: string, createSessionDto: CreateSessionDto) {
    try {
      const hasSession = this.sessionsRepository.find({
        where: {
          sessionUser: { id: userId },
          sessionPacient: { id: createSessionDto.sessionPacient.toString() },
        },
      });
      if (hasSession) throw new HttpException("Session already exists", 400);
      const createdSession = this.sessionsRepository.save({
        ...createSessionDto,
      });
      if (!createdSession) throw new HttpException("Session not created", 400);
      return createdSession;
    } catch (error) {
      console.log(error);
    }
  }

  findAll(pacientId: string, userId: string) {
    try{
    const foundPaciente = this.sessionsRepository.findOne({
      where: {
        id: pacientId,
        sessionUser: { id: userId },
      },
    });
    if (!foundPaciente) throw new HttpException("Pacient not found", 404);
    return this.sessionsRepository.find({
      where: {
        sessionPacient: { id: pacientId },
      },
    });
  } catch (error) {
    console.log(error);
  }
  }

  findOne(id: string, userId: string) {
    try {
      const foundSession = this.sessionsRepository.findOne({
        where: {
          id: id,
          sessionUser: { id: userId },
        },
      });
      if (!foundSession) throw new HttpException("Session not found", 404);
      return foundSession;
    } catch (error) {
      console.log(error);
    }
  }

  update(id: string, userId: string, updateSessionDto: UpdateSessionDto) {
    const foundSession = this.sessionsRepository.findOne({
      where: {
        id: id,
        sessionUser: { id: userId },
      },
    });
    if (!foundSession) throw new HttpException("Session not found", 404);
    return this.sessionsRepository.save({
      id,
      ...updateSessionDto,
    });
  }

  remove(id: string, userId: string) {
    const foundSession = this.sessionsRepository.findOne({
      where: {
        id: id,
        sessionUser: { id: userId },
      },
    });
    if (!foundSession) throw new HttpException("Session not found", 404);
    return this.sessionsRepository.softDelete(id);
  }
}
