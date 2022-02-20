import express  from "express";
import {graphqlHTTP} from 'express-graphql';
import {schema} from './Schema'
import cors from 'cors';
import { createConnection } from "typeorm";
import {Employees} from './Entities/Employees'

//funcion principal para ejecutar la aplicacion

const main = async () => {

    //Creando una conexion con la base de datos
        await createConnection({
            type:"mysql",
            database:"employeescrud",
            username:"root",
            password:"123456",
            logging: true,
            synchronize: false,  //es importante prestar atencion a esta instruccion despues de haber sincronizado la entidad con la db para la creacion de la table hay que cambiarlo a "false" ya que si no intentara crear constantemente otras tablas
            entities: [Employees]
        });

    
    //Creando la inicializacion del server y tambien indicando que haremos peticiones por medio de HTTPS  por eso declaramos que recibiremos informacion en formato Json
    const app = express()
    app.use(cors())
    app.use(express.json())
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))


    app.listen(3001, () => {
        console.log('Server Running On Port 3001')
    });
};

main().catch((err => {
    console.error(err);
}));