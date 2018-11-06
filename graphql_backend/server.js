const http = require('http');
var express = require('express');
var graphqlHTTP = require('express-graphql');

const hostname = '127.0.0.1';
const port = 3000;

var schema = require('./schema');

// The root provides a resolver function for each API endpoint
var root = require('./resolver');

var app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // graphiql on selaimessa toimiva kehitystyökalu GraphQL kyselyille
}));
app.listen(port);
console.log('GraphQL API serveri juoksee osoitteessa localhost:'+port+'/graphql');

