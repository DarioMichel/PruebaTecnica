import { gql } from '@apollo/client';


//Para poder hacer uso de las Mutaciones que se haran desde el front end hacia el backend, tendremos que crear una carpeta propia para contenido de GraphQL donde crearemos la carpeta para las mutaciones y para las consultas

export const GET_ALL_EMPLOYEES =  gql`
    query getAllEmployees{
        getAllEmployees {
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