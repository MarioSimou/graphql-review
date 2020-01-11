import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/schema";
import {Client} from 'pg'

const app = express(),
  port = process.env.PORT || 3000;


const init = cb => cb()
init( async ()=> {
  const pgClient = new Client({connectionString: process.env.DB_URI})
  pgClient.connect()

  const apolloServer = new ApolloServer({
    schema,
    context: { pgClient }
  });
  apolloServer.applyMiddleware({ app, path: "/graphql" });
  
  app.listen(port, () =>
    process.stdout.write(
      `The app listens on http://localhost:${port}${apolloServer.graphqlPath}\n`
    )
  );
})