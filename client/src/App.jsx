import { gql, useQuery } from '@apollo/client'
import './App.css'

const query = gql`
  query GetTodoWithUser{
   getTodos{
   title
   completed
   user{
   id
   name
   }
   }
  }
`


function App() {
   const { data, loading } = useQuery(query)
   console.log(data)
  return (
    <div>
      <h1>Client Graph QL</h1>
    </div>
  )
}

export default App
