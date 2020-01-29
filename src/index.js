import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { makeExecutableSchema } from 'graphql-tools';
import bodyParser from 'body-parser';
import { createServer } from 'http';

import './config/db.js';
import constants from './config/constants';
import typeDefs from './graphql/schema';
import resolvers from './graphql/resolvers';

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  playground: {
    endpoint: `http://localhost:4000/graphql`,
    settings: {
      'editor.theme': 'light'
    }
  }
})

const app = express();

server.applyMiddleware({
  app: app
})

// const schema = makeExecutableSchema({
//   typeDefs,
//   resolvers
// });


// APP.use(
//   '/graphql',
//   bodyParser.json(),
//   graphqlExpress({ schema: SCHEMA })
// );

// app.use('/graphiql', graphiqlExpress({
//   endpointURL: constants.GRAPHQL_PATH
// }))

// app.use(constants.GRAPHQL_PATH, graphqlExpress({
//   schema
// }))

const graphQLServer = createServer(app);

graphQLServer.listen(constants.PORT, err => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listen to port: ${constants.PORT}`);
  }
}); 