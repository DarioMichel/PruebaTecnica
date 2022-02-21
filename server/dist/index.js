"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_graphql_1 = require("express-graphql");
const Schema_1 = require("./Schema");
const cors_1 = __importDefault(require("cors"));
const typeorm_1 = require("typeorm");
const Employees_1 = require("./Entities/Employees");
//funcion principal para ejecutar la aplicacion
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    //Creando una conexion con la base de datos
    yield (0, typeorm_1.createConnection)({
        type: "mysql",
        database: "employeescrud",
        username: "root",
        password: "123456",
        logging: true,
        host:'',
        synchronize: True,
        entities: [Employees_1.Employees]
    });
    //Creando la inicializacion del server y tambien indicando que haremos peticiones por medio de HTTPS  por eso declaramos que recibiremos informacion en formato Json
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)());
    app.use(express_1.default.json());
    app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
        schema: Schema_1.schema,
        graphiql: true
    }));
    app.listen(3001, () => {
        console.log('Server Running On Port 3001');
    });
});
main().catch((err => {
    console.error(err);
}));
