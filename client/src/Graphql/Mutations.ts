import { gql } from '@apollo/client';


//Para poder hacer uso de las Mutaciones que se haran desde el front end hacia el backend, tendremos que crear una carpeta propia para contenido de GraphQL donde crearemos la carpeta para las mutaciones y para las consultas

export const CREATE_EMPLOYEE =  gql`

    mutation createEmployee(
        $name: String! 
        $lastname: String! 
        $email: String! 
        $nationality: String!
        $phone: String! 
        $civilstatus: String!
        ) {
            createEmployee(
                name: $name 
                lastname: $lastname 
                email: $email 
                nationality: $nationality
                phone: $phone 
                civilstatus: $civilstatus
            ) {
                id
                name
                lastname
                email
                nationality
                phone
                civilstatus
            }
       }
`;


export const UPDATE_EMPLOYEE =  gql`

    mutation updateEmployee(
        $name: String!
        $newname: String! 
        $newlastname: String! 
        $newemail: String! 
        $newphone: String! 
        
        ) {
            updateEmployee(
                name: $name 
                newname: $newname
                newlastname: $newlastname 
                newemail: $newemail 
                newphone: $newphone 
            ) {
                message
            }
       }
`;

