import { GraphQLString } from "graphql";
import { EmployeeType } from "../TypeDefs/Employee";

export const CREATE_EMPLOYEE = {
    type: EmployeeType,
    args:  {
        name: {type: GraphQLString},
        lastname: {type: GraphQLString},
        email: {type: GraphQLString},
        nationality: {type: GraphQLString},
        phone: {type: GraphQLString},
        civilstatus: {type: GraphQLString}
    },
    async resolve(parent: any, args:any) {
        const { name, lastname, email, nationality, phone, civilstatus } = args
        return args;
    },
};
