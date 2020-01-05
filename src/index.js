import express from 'express'
import {ApolloServer} from 'apollo-server-express'
import schema from './graphql/schema'
import mock from './mock'
const app = express(),
      port = process.env.PORT || 3000


const apolloServer = new ApolloServer({schema, context: {mock}})
apolloServer.applyMiddleware({app, path: '/graphql'})

app.listen(port, () => process.stdout.write(`The app listens on http://localhost:${port}${apolloServer.graphqlPath}\n`))