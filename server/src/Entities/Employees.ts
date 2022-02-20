//es importante poner en verdadero la funcion de decorators en el tsconfig.json


import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";



@Entity()
export class Employees extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!:number;

    @Column()
    name!: string;
    
    
    @Column()
    lastname!: string;
    
    
    @Column()
    email!: string;
    
    
    @Column()
    nationality!: string;
    
    
    @Column()
    phone!: string;
    
    
    @Column()
    civilstatus!: string;
    

}