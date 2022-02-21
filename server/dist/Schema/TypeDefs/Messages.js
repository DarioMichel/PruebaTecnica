"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageType = void 0;
const graphql_1 = require("graphql"); //importamos los tipos de datos que vamos a utilizar
//los TypeDefs son los datos que definiremos para las consuiltas de solo lectura del futuro.
exports.MessageType = new graphql_1.GraphQLObjectType({
    name: "Message",
    fields: () => ({
        successful: { type: graphql_1.GraphQLBoolean },
        message: { type: graphql_1.GraphQLString },
    }),
});
