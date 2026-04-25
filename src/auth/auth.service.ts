import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from './entities/user.entity';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { ResponseUserDto } from './dto/response-user.dto';
import { ResponseTokenDto } from './dto/ResponseToken.dto';


@Injectable()
export class AuthService {

    constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
) {}

async register(dto: RegisterDto): Promise<ResponseUserDto> {
    const hashedPassword = await bcrypt.hash(dto.password, 10);
    const user = this.userRepository.create({
        nombre: dto.nombre,
        email: dto.email,
        password: hashedPassword,
    });
    const saved = await this.userRepository.save(user);
    
    // Regresar solo los campos seguros
    return {
        id: saved.id,
        nombre: saved.nombre,
        email: saved.email,
    };
}

async login(dto: LoginDto): Promise<ResponseTokenDto>{
    const user = await this.userRepository.findOneBy({ email: dto.email }); //buscar por email
    if (!user) throw new UnauthorizedException('Credenciales incorrectas'); //si no existe lanza error
    const isMatch = await bcrypt.compare(dto.password, user.password);//comparar contraseña si no coincide
    if (!isMatch) throw new UnauthorizedException('Credenciales incorrectas');    // lanza error
    const payload = { sub: user.id, email: user.email };//generar token
    return { token: this.jwtService.sign(payload) };
}

}
