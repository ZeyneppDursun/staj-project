import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://34.45.11.245:8080/v1/graphql',
  cache: new InMemoryCache(),
  headers: {
    'x-hasura-admin-secret': 'myadminsecretkey',
  },
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>  
  </StrictMode>,
)
