import { Module } from '@nestjs/common';
import { PacientService } from './pacient.service';
import { PacientController } from './pacient.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PacientEntity } from './entities/pacient.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PacientEntity])],
  controllers: [PacientController],
  providers: [PacientService]
})
export class PacientModule {}
