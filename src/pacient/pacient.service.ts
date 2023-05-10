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
  async create(userId: string, createPacientDto: CreatePacientDto) {
    try {
      const hasPaciente = await this.pacientRepository.findOne({
        where: {
          user: { id: userId },
          firstName: createPacientDto.firstName,
        },
      });
      if (hasPaciente) throw new HttpException("Paciente already exists", 400);
      
      const createdPaciente = await this.pacientRepository.save({
        user: { id: userId },
        ...createPacientDto,
      });
      if (!createdPaciente) throw new HttpException("Pacient not created", 400);

      return createdPaciente;
    } catch (error) {
      console.log(error);
    }
  }

  async findAll(userId: string) {
    const response = await this.pacientRepository.find({
      where: {
        user: { id: userId },
      },
    });

    return response;
  }

  async findOne(id: string, userId: string) {
    try {
      const foundPaciente = await this.pacientRepository.findOne({
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

  async update(id: string, userId: string, updatePacientDto: UpdatePacientDto) {
    const foundPaciente = await this.pacientRepository.findOne({
      where: {
        id: id,
        user: { id: userId },
      },
    });
    if (!foundPaciente) throw new HttpException("Pacient not found", 404);
    const updatedPaciente = await this.pacientRepository.update(id, {
      ...updatePacientDto,
    });
    return updatedPaciente;
  }

  async remove(id: string, userId: string) {
    const foundPaciente = await this.pacientRepository.findOne({
      where: {
        id: id,
        user: { id: userId },
      },
    });
    if(!foundPaciente) throw new HttpException("Pacient not found", 404);
    return await this.pacientRepository.softDelete(id);
  }
}
