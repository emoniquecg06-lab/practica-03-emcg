import { IsString, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';


export class LoginDto {

    @ApiProperty({ example: 'monyca@gmail.com'})
    @IsEmail()
    email: string;

    @ApiProperty({ example: '123456'})
    @IsString()
    password: string;

}