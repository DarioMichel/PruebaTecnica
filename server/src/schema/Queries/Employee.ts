import { GraphQLList } from 'graphql'
import {EmployeeType} from '../TypeDefs/Employee'

export const  GET_ALL_EMPLOYEES = {
    type: new GraphQLList(EmployeeType),
    resolve()  {
        return [];
    }
};