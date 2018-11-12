var {
  buildSchema
} = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`

type Query {
  info: String
  message(_id: String): Message
  allMessages: [Message!]
}

type Mutation {
  createMessage(msg: String!): Message!
}

# Uusi tyyppi ja sen määritys
type Message {
  _id: ID!
  msg: String!
  user: String
}

`);
module.exports = schema;