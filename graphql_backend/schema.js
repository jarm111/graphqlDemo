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
  createMessage(title: String, user: String, msg: String!): Message!
}

# Uusi tyyppi ja sen määritys
type Message {
  _id: ID!
  title: String
  user: String
  msg: String!
  
}

`);
module.exports = schema;