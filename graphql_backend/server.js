const http = require('http');
var express = require('express');
var graphqlHTTP = require('express-graphql');

var app = express();
var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));

require('dotenv').config();
const port = process.env.PORT || 3000;

var mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true})
.then(
  () => { console.log('Yhdistetty tietokantaan'); },
  err => { console.log(err); }
);
require('./mongoose_schemas.js')

// Tuodaan schema ja funktiot
var schema = require('./schema'); 
var resolver = require('./resolver');


app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: resolver,
  graphiql: true, // graphiql on selaimessa toimiva kehitystyökalu GraphQL kyselyille
}));
app.listen(port);
console.log('GraphQL API serveri juoksee osoitteessa localhost:'+port+'/graphql');
