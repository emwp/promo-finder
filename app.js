const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const mongoose = require('mongoose');
const graphqlSchema = require('./graphql/schema/index');
const graphqlResolvers = require('./graphql/resolvers/index');

const app = express();

// uses the body-parser to parse any incoming HTTP request bodies
app.use(bodyParser.json());

// Defining the graphql query & mutation schemas
// Type of the expected data
app.use(
  '/graphql',
  graphqlHttp({
    schema: graphqlSchema,
    rootValue: graphqlResolvers,
    graphiql: true,
  }),
);

// Connecting to mongoDB with mongoose
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@cluster0-j9chw.mongodb.net/${process.env.MONGO_DB}?retryWrites=true`,
  )
  .then(() => {
    app.listen(3000);
  })
  .catch(err => console.log(err));
