var {
  buildSchema
} = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
type RandomDie {
  numSides: Int!
  rollOnce: Int!
  roll(numRolls: Int!): [Int]
}


type Query {
  hello: String
  quoteOfTheDay: String
  random: Float!
  rollThreeDice: [Int]
}
`);
module.exports = schema;