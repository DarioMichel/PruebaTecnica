import { GraphQLString } from "graphql";
import { EmployeeType } from "../TypeDefs/employee";
import {MessageType} from '../TypeDefs/Messages'
import {Employees} from '../../Entities/Employees'

export const CREATE_EMPLOYEE = {
    type: EmployeeType,
    args:  {
        name: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: GraphQLString},
        nationality: {type: GraphQLString},
        phone: {type: GraphQLString},
        civilstatus: {type: GraphQLString}
    },
    async resolve(parent: any, args:any) {
        const { name, lastname, email, nationality, phone, civilstatus } = args
        await Employees.insert({name, lastname, email,nationality, phone, civilstatus});
        return args;
    },
};

//de esta manera realizamos la mutacion para la actualizacion de la base de datos

export const UPDATE_EMPLOYEE = {
    type: MessageType,
    args:  {
        name: {type: GraphQLString},
        newname: {type: GraphQLString},
        newlastname: {type: GraphQLString},
        newemail: {type : GraphQLString},
        newphone: {type: GraphQLString}

    },
    async resolve(parent: any, args:any) {
        const {name, newname, newlastname, newemail, newphone} = args
        const employee = await Employees.findOne({name: name})  //en este apartado indicamos el idetificador para consultar todos los datos de x usuario en la tabla, lo que seria un SELECT* en Mysql

        if (!employee) {
            throw new Error("USERNAME DOESNT EXIST");
        }
        
        await Employees.update(
            {name:name}, //Pasamos este identificador indicandole de que usuario vamos a basarnos para actualizar.
            {
                name: newname,
                lastname: newlastname,
                email: newemail,
                phone: newphone
            }
        );
        return {successful: true, message:"EMPLOYEE UPDATE SUCCESS"}
    },
}


// Las mutaciones es la manera en la que podemos editar, eliminar o crear en la base de datos siguiento este modelo, y en Graphql tenemos que hacer la mutacion, podemos pasar los datos verdaderos alla.