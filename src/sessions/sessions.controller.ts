import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from "@nestjs/common";
import { SessionsService } from "./sessions.service";
import { CreateSessionDto } from "./dto/create-session.dto";
import { UpdateSessionDto } from "./dto/update-session.dto";
import { Roles } from "src/roles/roles.decorator";
import { RoleEnum } from "src/roles/roles.enum";
import { AuthGuard } from "@nestjs/passport";
import { RolesGuard } from "src/roles/roles.guard";

@Roles(RoleEnum.user)
@UseGuards(AuthGuard('jwt'), RolesGuard)
@Controller("sessions")
export class SessionsController {
  constructor(private readonly sessionsService: SessionsService) {}

  @Post()
  create(@Request() req, @Body() createSessionDto: CreateSessionDto) {
    return this.sessionsService.create(req.user.id, createSessionDto);
  }

  @Get("pacient/:pacientId")
  findAll(@Request() req, @Param("pacientId") pacientId: string) {
    return this.sessionsService.findAll(req.user.id, pacientId);
  }

  @Get(":id")
  findOne(@Request() req, @Param("id") id: string) {
    return this.sessionsService.findOne(req.user.id, id);
  }

  @Patch(":id")
  update(@Request() req, @Param("id") id: string, @Body() updateSessionDto: UpdateSessionDto) {
    return this.sessionsService.update(req.user.id, id, updateSessionDto);
  }

  @Delete(":id")
  remove(@Request() req, @Param("id") id: string) {
    return this.sessionsService.remove(req.user.id,id);
  }
}
