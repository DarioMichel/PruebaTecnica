import React from 'react';
import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'
import  Sidebar  from './Components/Sidebar'
import ListOFEmployees from './Components/ListOfEmployees';

function App() {

  const client = new ApolloClient ({
    uri:'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });

  return (
    <div>
      <div className="Components">
        <Sidebar/>  
        <ApolloProvider client={client}> 
          <ListOFEmployees/>
        </ApolloProvider>
      </div>
    </div>
  );



}

export default App;
