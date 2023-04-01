import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { PacientService } from './pacient.service';
import { CreatePacientDto } from './dto/create-pacient.dto';
import { UpdatePacientDto } from './dto/update-pacient.dto';
import { Roles } from 'src/roles/roles.decorator';
import { RoleEnum } from 'src/roles/roles.enum';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/roles/roles.guard';


@Roles(RoleEnum.user)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller('pacient')
export class PacientController {
  constructor(private readonly pacientService: PacientService) {}

  @Post()
  create(  @Request() req,
    @Body() createPacientDto: CreatePacientDto) {
    return this.pacientService.create(req.user.id, createPacientDto);
  }

  @Get()
  findAll(@Request() req) {
    return this.pacientService.findAll(req.user.id);
  }

  @Get(':id')
  findOne(@Param('id') id: string,  @Request() req) {
    return this.pacientService.findOne(id, req.user.id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Request() req, @Body() updatePacientDto: UpdatePacientDto) {
    return this.pacientService.update(id, req.user.id, updatePacientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Request() req) {
    return this.pacientService.remove(id, req.user.id);
  }
}
