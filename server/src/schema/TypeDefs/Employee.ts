import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";  //importamos los tipos de datos de la libreria de GraphQL



//Creacion de formato de la tabla "Employees" Para la base de datos
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