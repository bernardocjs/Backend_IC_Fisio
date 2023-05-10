import { ApiProperty } from '@nestjs/swagger';
import { 
  IsNotEmpty,
  IsString,
  IsNumber,
} from 'class-validator';

export class CreatePacientDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  @IsString()
  lastName: string;

  @ApiProperty({ example: "masculino" })
  @IsNotEmpty()
  @IsString()
  gender: string;

  @ApiProperty({ example: 18})
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsString()
  ifChildWasItPremature: string;

  @ApiProperty()
  @IsString()
  ifChildHadIncurrenceDuringPregnancy: string;

  @ApiProperty()
  @IsString()
  ifChildHowWasChildbirth: string;  

  @ApiProperty({ example: "Santa Rita do Sapucaí" })
  @IsNotEmpty()
  @IsString()
  city: string;

  @ApiProperty({ example: "MG" })
  @IsNotEmpty()
  @IsString()
  state: string;

  @ApiProperty({ example: "37701-000" })
  @IsNotEmpty()
  @IsString()
  cep: string;

  @ApiProperty({ example: "(35) 99999-9999" })
  @IsNotEmpty()
  @IsString()
  tel: string;
}

