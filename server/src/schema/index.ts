import { GraphQLObjectType, GraphQLSchema } from "graphql";
import {GET_ALL_EMPLOYEES} from './Queries/Employee'
import {CREATE_EMPLOYEE} from './Mutations/Employee'

//Creando el RootQuery para las Queries que hagamos desde nuestro servidor GrahpQL
const RootQuery = new GraphQLObjectType ({
    name: "RootQuery",
    fields: {
        getAllEmployees: GET_ALL_EMPLOYEES,
    }
})

//Dando de alta nuestras Mutaciones para su utlizacion
const Mutation = new GraphQLObjectType ({
    name: "Mutation",
    fields: {
        createEmployee: CREATE_EMPLOYEE,
    }
})

//Creacion de variable schema
export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
})