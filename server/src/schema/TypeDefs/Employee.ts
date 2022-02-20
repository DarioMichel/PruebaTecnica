import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";  //importamos los tipos de datos que vamos a utilizar

//los TypeDefs son los datos que definiremos para las consuiltas de solo lectura del futuro.


export const EmployeeType = new GraphQLObjectType ({
    name: "Employee",
    fields: () => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: GraphQLString},
        nationality: {type: GraphQLString},
        phone: {type: GraphQLString},
        civilstatus: {type: GraphQLString}
    }),
});