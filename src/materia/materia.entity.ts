import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Materia {

    @PrimaryGeneratedColumn()
    id: number;

    // entidades
    @Column()
    nombre: string;

    @Column()
    docente: string;

    @Column()
    creditos: number;

    @Column()
    semestre: number;

    @Column({ nullable: true })
    descripcion: string;

}