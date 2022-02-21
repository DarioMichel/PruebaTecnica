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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UPDATE_EMPLOYEE = exports.CREATE_EMPLOYEE = void 0;
const graphql_1 = require("graphql");
const employee_1 = require("../TypeDefs/employee");
const Messages_1 = require("../TypeDefs/Messages");
const Employees_1 = require("../../Entities/Employees");
exports.CREATE_EMPLOYEE = {
    type: employee_1.EmployeeType,
    args: {
        name: { type: graphql_1.GraphQLString },
        lastname: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        nationality: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
        civilstatus: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, lastname, email, nationality, phone, civilstatus } = args;
            yield Employees_1.Employees.insert({ name, lastname, email, nationality, phone, civilstatus });
            return args;
        });
    },
};
//de esta manera realizamos la mutacion para la actualizacion de la base de datos
exports.UPDATE_EMPLOYEE = {
    type: Messages_1.MessageType,
    args: {
        name: { type: graphql_1.GraphQLString },
        newname: { type: graphql_1.GraphQLString },
        newlastname: { type: graphql_1.GraphQLString },
        newemail: { type: graphql_1.GraphQLString },
        newphone: { type: graphql_1.GraphQLString }
    },
    resolve(parent, args) {
        return __awaiter(this, void 0, void 0, function* () {
            const { name, newname, newlastname, newemail, newphone } = args;
            const employee = yield Employees_1.Employees.findOne({ name: name }); //en este apartado indicamos el idetificador para consultar todos los datos de x usuario en la tabla, lo que seria un SELECT* en Mysql
            if (!employee) {
                throw new Error("USERNAME DOESNT EXIST");
            }
            yield Employees_1.Employees.update({ name: name }, //Pasamos este identificador indicandole de que usuario vamos a basarnos para actualizar.
            {
                name: newname,
                lastname: newlastname,
                email: newemail,
                phone: newphone
            });
            return { successful: true, message: "EMPLOYEE UPDATE SUCCESS" };
        });
    },
};
// Las mutaciones es la manera en la que podemos editar, eliminar o crear en la base de datos siguiento este modelo, y en Graphql tenemos que hacer la mutacion, podemos pasar los datos verdaderos alla.
