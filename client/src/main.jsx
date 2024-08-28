import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client'
import './index.css'

const client = new ApolloClient({
  uri:'http://localhost:8000/graphql',
  cache: new InMemoryCache()
})

const query = `
 query GetTodos{
  getTodos{
  title
  completed
  user{
  name
  }
  }
 }
`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApolloProvider client={client} >
    <App />
    </ApolloProvider>
  </StrictMode>,
)
