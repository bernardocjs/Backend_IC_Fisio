import { ApiProperty } from '@nestjs/swagger';
import { 
  IsNotEmpty,
  MinLength, 
  IsString,
  Min, 
  Max,
  IsNumber,
} from 'class-validator';
import e from 'express';

export class CreatePacientDto {
  @ApiProperty({ example: 'John' })
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe' })
  @IsNotEmpty()
  @MinLength(2)
  @IsString()
  lastName: string;

  @ApiProperty({ example: 18})
  @IsNotEmpty()
  @IsNumber()
  age: number;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  problem: string;

  @ApiProperty({example: 10})
  @IsNotEmpty()
  @IsNumber()
  @Min(0)
  @Max(10)
  problemSeverity: number;

  @ApiProperty({example: 85.6})
  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @ApiProperty({example: 'none'})
  @IsNotEmpty()
  @IsString()
  allergies: string;
}

