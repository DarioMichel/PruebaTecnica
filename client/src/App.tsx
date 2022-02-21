import React from 'react';
import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import ListOFEmployees from './Components/ListOfEmployees';
import Navbar from './Components/Navbar';


function App() {

  const client = new ApolloClient ({
    uri:'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  return (
    
        
        <ApolloProvider client={client}> 
        <Navbar/>
          <div className="Components"></div>
            {/* <DataTable/> */}
            {/* <ListOFEmployees/>  */}
          </ApolloProvider>
        

)}

export default App;
