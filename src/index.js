import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import {GraphQLSchema, GraphQLString, GraphQLObjectType} from 'graphql'

const app = express(),
      port = process.env.PORT || 3000

const query = new GraphQLObjectType({
    name: 'QueryRootType',
    description: 'Consists the Root operation type',
    fields: {
        hello: {
            type: GraphQLString,
            resolve: () => `hello world`
        }
    }
})
const schema = new GraphQLSchema({
    query
})

const apolloServer = new ApolloServer({schema})
apolloServer.applyMiddleware({app, path: '/graphql'})

app.listen(port, () => process.stdout.write(`The app listens on http://localhost:${port}${apolloServer.graphqlPath}\n`))