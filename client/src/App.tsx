import React from 'react';
import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import {Table, TableContainer, TableHead, TableCell, TableBody,TableRow } from '@material-ui/core'
import ListOFEmployees from './Components/ListOfEmployees';

function App() {

  const client = new ApolloClient ({
    uri:'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });




  return (

    <>
    <ApolloProvider client={client}> 
      <ListOFEmployees/>
    </ApolloProvider>
    </>
  );



}

export default App;
