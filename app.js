const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHttp({
    schema: buildSchema(`
    type RootQuery {
      promo: [String!]!
    }

    type RootMutation {
      createPromo(name: String): String
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
    rootValue: {
      promo: () => {
        return ['TV 42 Pol', 'Notebook', 'Smartphone Samsung S9+'];
      },
      createPromo: arg => {
        const promoName = arg.name;
        return promoName;
      },
    },
  }),
);

app.listen(3000);
