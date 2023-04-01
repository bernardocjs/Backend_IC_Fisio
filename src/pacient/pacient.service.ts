import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreatePacientDto } from "./dto/create-pacient.dto";
import { UpdatePacientDto } from "./dto/update-pacient.dto";
import { PacientEntity } from "./entities/pacient.entity";

@Injectable()
export class PacientService {
  constructor(
    @InjectRepository(PacientEntity)
    private pacientRepository: Repository<PacientEntity>
  ) {}
  create(userId: string, createPacientDto: CreatePacientDto) {
    try {
      const hasPaciente = this.pacientRepository.find({
        where: {
          user: { id: userId },
          firstName: createPacientDto.firstName,
        },
      });
      if (hasPaciente) throw new HttpException("Paciente already exists", 400);
      
      const createdPaciente = this.pacientRepository.save({
        userId,
        ...createPacientDto,
      });
      if (!createdPaciente) throw new HttpException("Pacient not created", 400);

      return createdPaciente;
    } catch (error) {
      console.log(error);
    }
  }

  findAll(userId: string) {
    return this.pacientRepository.find({
      where: {
        user: { id: userId },
      },
    });
  }

  findOne(id: string, userId: string) {
    try {
      const foundPaciente = this.pacientRepository.findOne({
        where: {
          id: id,
          user: { id: userId },
        },
      });
      if (!foundPaciente) throw new Error("Pacient not found");
      return foundPaciente;
    } catch (error) {
      return error.message;
    }
  }

  update(id: string, userId: string, updatePacientDto: UpdatePacientDto) {
    const foundPaciente = this.pacientRepository.findOne({
      where: {
        id: id,
        user: { id: userId },
      },
    });
    if (!foundPaciente) throw new HttpException("Pacient not found", 404);
    const updatedPaciente = this.pacientRepository.update(id, {
      ...updatePacientDto,
    });
    return updatedPaciente;
  }

  remove(id: string, userId: string) {
    const foundPaciente = this.pacientRepository.findOne({
      where: {
        id: id,
        user: { id: userId },
      },
    });
    if(!foundPaciente) throw new HttpException("Pacient not found", 404);
    return this.pacientRepository.softDelete(id);
  }
}
