import React from "react";
import {GET_ALL_EMPLOYEES} from "../Graphql/Queries"
import {useQuery} from '@apollo/client'
import {Table, TableContainer, TableHead, TableCell, TableBody,TableRow } from '@material-ui/core'

function ListOFEmployees() {

    const {data} = useQuery(GET_ALL_EMPLOYEES);
    


    return <div className="table">
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>LastName</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>Nationality</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>CivilStatus</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data && (data.getAllEmployees.map((employee : any) => {
                return  <TableRow>
                            <TableCell>{employee.id}</TableCell>
                            <TableCell>{employee.name}</TableCell>
                            <TableCell>{employee.lastname}</TableCell>
                            <TableCell>{employee.email}</TableCell>
                            <TableCell>{employee.nationality}</TableCell>
                            <TableCell>{employee.phone}</TableCell>
                            <TableCell>{employee.civilstatus}</TableCell>
                        </TableRow>
                
                }))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>;
}

export default ListOFEmployees;