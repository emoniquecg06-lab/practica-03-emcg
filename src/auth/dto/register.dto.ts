import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class RegisterDto {

    @ApiProperty({ example: 'Monica'})
    @IsString()
    nombre: string;
    
    @ApiProperty({ example: 'monyca@gmail.com'})
    @IsEmail()
    email: string;

    @ApiProperty({ example: '123456'})
    @IsString()
    password: string;

}