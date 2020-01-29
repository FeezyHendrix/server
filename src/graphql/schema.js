
import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Tweet {
    _id: String
    text: String
  }

  type Query {
    getTweets: [Tweet]
  }

  schema {
    query: Query
  }
`;

export default typeDefs;