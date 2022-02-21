"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GET_ALL_EMPLOYEES = void 0;
const graphql_1 = require("graphql");
const employee_1 = require("../TypeDefs/employee");
const Employees_1 = require("../../Entities/Employees");
exports.GET_ALL_EMPLOYEES = {
    type: new graphql_1.GraphQLList(employee_1.EmployeeType),
    resolve() {
        return Employees_1.Employees.find();
    }
};
