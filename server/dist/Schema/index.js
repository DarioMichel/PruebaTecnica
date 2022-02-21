"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const graphql_1 = require("graphql");
const Employee_1 = require("./Queries/Employee");
const Employee_2 = require("./Mutations/Employee");
const RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllEmployees: Employee_1.GET_ALL_EMPLOYEES,
    },
});
const Mutation = new graphql_1.GraphQLObjectType({
    name: "Mutation",
    fields: {
        createEmployee: Employee_2.CREATE_EMPLOYEE,
        updateEmployee: Employee_2.UPDATE_EMPLOYEE,
    },
});
exports.schema = new graphql_1.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});
