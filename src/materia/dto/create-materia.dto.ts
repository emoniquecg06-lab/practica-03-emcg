import { IsString, IsNumber, IsOptional, MinLength, MaxLength, Min, Max } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateMateriaDto {

    @ApiProperty({ example: 'Matemáticas'})
    @IsString()
    @MinLength(3)
    @MaxLength(50)
    nombre: string;

    @ApiProperty({ example: 'Dr. Garcia' })
    @IsString()
    @MinLength(3)
    docente: string;

    @ApiProperty({ example: 8 })   
    @IsNumber()
    @Min(1)
    @Max(20)
    creditos: number;

    @ApiProperty({ example: 3 })
    @IsNumber()
    @Min(1)
    @Max(12)
    semestre: number;

    @ApiProperty({ example: 'Materia básica de matemáticas' })
    @IsOptional()
    @IsString()
    descripcion: string;
}