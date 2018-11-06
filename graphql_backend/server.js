const http = require('http');
var express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

const hostname = '127.0.0.1';
const port = 3000;

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
};

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // graphiql on selaimessa toimiva kehitystyökalu GraphQL kyselyille
}));
app.listen(port);
console.log('Running a GraphQL API server at localhost:'+port+'/graphql');

