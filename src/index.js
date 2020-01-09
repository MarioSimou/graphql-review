import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema from "./graphql/schema";
import products from "./mock/products";
import users from "./mock/users";
import { Product } from "./graphql/schema/types/objectTypes/Product";
import { User } from "./graphql/schema/types/objectTypes/User";

const app = express(),
  port = process.env.PORT || 3000;

const apolloServer = new ApolloServer({
  schema,
  context: {
    db: {
      products: products.products.map(product => new Product(product)),
      users: users.users.map(user => new User(user))
    }
  }
});
apolloServer.applyMiddleware({ app, path: "/graphql" });

app.listen(port, () =>
  process.stdout.write(
    `The app listens on http://localhost:${port}${apolloServer.graphqlPath}\n`
  )
);
