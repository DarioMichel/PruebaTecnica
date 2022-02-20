
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"; //se declaran los tipos de datos ORM 



@Entity() //se declara la entidad para la creacion de la tabla en la base de datos
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