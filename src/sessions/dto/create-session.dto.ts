import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import { PacientEntity } from "src/pacient/entities/pacient.entity";
import { User } from "src/users/entities/user.entity";

export class CreateSessionDto {
    
  @ApiProperty({ example: "12334" })
  @IsNotEmpty()
  @IsString()
  sessionUser: User;
  @ApiProperty({ example: "45678" })
  @IsNotEmpty()
  @IsString()
  sessionPacient: PacientEntity;

  @ApiProperty({ example: "Sessao inicial" })
  @IsString()
  name: string;
  // @ApiProperty({ example: "[{1: 5},{2: 5}, {4: 5}, {6: 5}]" })
  // @IsNotEmpty()
  // exams: [];
  // @ApiProperty({ example: "[{1: 5},{2: 5}, {4: 5}, {6: 5}]" })
  // @IsNotEmpty()
  // exercises: [];
  @ApiProperty({ example: "o problema relatado dessa semana foi ..." })
  @IsString()
  description: string;

  @ApiProperty({example: 1})
  @IsNumber()
  index: number;


  @ApiProperty({ example: "Perna Quebrada" })
  @IsString()
  diagnosis: string;


}
