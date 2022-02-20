import { gql } from '@apollo/client';


//Exportacion de las mutaciones que se haran hacia el servidor desde el cliente en este caso para añadir y editar.

//Mutacion para Crear 
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


//Mutacion para Editar

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

