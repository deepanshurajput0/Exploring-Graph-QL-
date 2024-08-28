import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import bodyParser from 'body-parser'
import axios from 'axios'
import cors from 'cors'

async function startServer(){
    const app = express()
    const server = new ApolloServer({
        typeDefs:`
        type User {
         id:ID!
         name:String!
         username:String!
         email:String!
         phone:String!
         website:String!

        }
        type Todo{
          id: ID!
          title: String!
          completed: Boolean
        }
          type Query{
          getTodos:[Todo]
          getAllUsers:[User]
          }
        `,
        resolvers:{
            Query:{
                getTodos: async ()=> (await axios.get('https://jsonplaceholder.typicode.com/todos')).data,
                getAllUsers: async ()=> (await axios.get('https://jsonplaceholder.typicode.com/users')).data,
                
            }
        }
    })

    app.use(bodyParser.json())
    app.use(cors())
    await server.start()
    app.use('/graphql',expressMiddleware(server))

    app.listen(8000,()=>{
        console.log(`Server Started at PORT 8000`)
    })
}


startServer()








