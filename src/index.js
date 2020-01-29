import express from 'express';
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import { createServer } from 'http';

import './config/db.js';
import constants from './config/constants';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const app = express();

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});


app.use(bodyParser.json());

app.use('/graphiql', graphiqlExpress({
  endpointURL: constants.GRAPHQL_PATH
}))

app.use(constants.GRAPHQL_PATH, graphqlExpress({
  schema
}))

const graphQLServer = createServer(app);

graphQLServer.listen(constants.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${constants.PORT}`);
  }
}); 