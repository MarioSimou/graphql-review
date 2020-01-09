import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/schema";
import data from "./mock/data";
import { Product } from "./graphql/schema/types/objectTypes/Product";
import { User } from "./graphql/schema/types/objectTypes/User";
import postgres from 'postgres'

const app = express(),
  port = process.env.PORT || 3000;


const init = cb => cb()
init( async ()=> {
  const sql = postgres(process.env.DB_URI)

  const apolloServer = new ApolloServer({
    schema,
    context: { sql }
  });
  apolloServer.applyMiddleware({ app, path: "/graphql" });
  
  app.listen(port, () =>
    process.stdout.write(
      `The app listens on http://localhost:${port}${apolloServer.graphqlPath}\n`
    )
  );
})