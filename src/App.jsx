import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client"
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react'
import Home from "./pages/Home";

const client = new ApolloClient({
  uri: "https://king-prawn-app-6arrs.ondigitalocean.app/graphql",
  cache: new InMemoryCache()
})


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </div>
    </ApolloProvider>
  )
}

export default App