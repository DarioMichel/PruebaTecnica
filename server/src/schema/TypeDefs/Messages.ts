import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLBoolean } from "graphql";  //importamos los tipos de datos que vamos a utilizar

//los TypeDefs son los datos que definiremos para las consuiltas de solo lectura del futuro.


export const MessageType = new GraphQLObjectType ({
    name: "Message",
    fields: () => ({
      successful: {type: GraphQLBoolean},
      message: {type: GraphQLString},
      
    }),
});