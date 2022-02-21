"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeeType = void 0;
const graphql_1 = require("graphql"); //importamos los tipos de datos que vamos a utilizar
//los TypeDefs son los datos que definiremos para las consuiltas de solo lectura del futuro.
exports.EmployeeType = new graphql_1.GraphQLObjectType({
    name: "Employee",
    fields: () => ({
        id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        lastname: { type: graphql_1.GraphQLString },
        email: { type: graphql_1.GraphQLString },
        nationality: { type: graphql_1.GraphQLString },
        phone: { type: graphql_1.GraphQLString },
        civilstatus: { type: graphql_1.GraphQLString }
    }),
});
