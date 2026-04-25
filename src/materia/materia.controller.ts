import { Controller, Get, Post, Patch, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { MateriaService } from './materia.service';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';



@Controller('materia')
export class MateriaController {

    constructor(private readonly materiaService: MateriaService) {}

    @Get()
    findAll() {
        return this.materiaService.findAll();
}

    @Get(':id')
    findOne(@Param('id')id:number){
        return this.materiaService.findOne(id)
    }

    @Post()
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    create(@Body()dto: CreateMateriaDto){
        return this.materiaService.create(dto)
    }

    @Patch(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    update(@Param('id')id:number, @Body() dto:UpdateMateriaDto){
        return this.materiaService.update(id, dto)
    }

    @Delete(':id')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    remove(@Param('id')id:number){
        return this.materiaService.remove(id)
    }


}
