import React from 'react';
import './App.css';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

function App() {

  const client = new ApolloClient ({
    uri:'http://localhost:3001/graphql',
    cache: new InMemoryCache(),
  });




  return (

    <>
    <ApolloProvider client={client}> 
    
    </ApolloProvider>
    </>
  );



}

export default App;
