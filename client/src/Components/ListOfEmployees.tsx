import React from "react";
import {GET_ALL_EMPLOYEES} from "../Graphql/Queries"
import {useQuery} from '@apollo/client'
import {Table, TableContainer, TableHead, TableCell, TableBody,TableRow } from '@material-ui/core'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

function ListOFEmployees() {

    const {data} = useQuery(GET_ALL_EMPLOYEES);
    

    //Creacion de tabla para para crud principal.
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
                {data && (data.getAllEmployees.map((employee : any) => { //Se crea la funcion data para pintar los datos en la app
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
            <Stack spacing={2}>
                <Pagination count={10} shape="rounded" />
            </Stack>
        </TableContainer>
    </div>;
}

export default ListOFEmployees;