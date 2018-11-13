const http = require('http');
var express = require('express');
var graphqlHTTP = require('express-graphql');

var app = express();
var cors = require('cors');
app.use(cors({origin: 'http://localhost:4200'}));

require('dotenv').config();
const port = process.env.PORT || 3000;

var mongoose = require('mongoose');
mongoose.connect('mongodb://'+process.env.DB_USER+':'+process.env.DB_PW+'@ds063859.mlab.com:63859/graphql_demo',{ useNewUrlParser: true})
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
