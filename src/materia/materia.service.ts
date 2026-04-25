import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Materia } from './materia.entity';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';

@Injectable()
export class MateriaService {
    
    constructor(
    @InjectRepository(Materia)
    private materiaRepository: Repository<Materia>,
) {}

findAll(){
    return this.materiaRepository.find()
}

findOne(id:number){
    return this.materiaRepository.findOneBy({id})
}

create(dto: CreateMateriaDto){
    return this.materiaRepository.save(dto)
}

update(id:number, dto:UpdateMateriaDto){
    return this.materiaRepository.update(id, dto)
}

remove(id:number){
    return this.materiaRepository.delete(id)
}


}


