const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');

const app = express();

const promos = [];

app.use(bodyParser.json());

app.use(
  '/graphql',
  graphqlHttp({
    schema: buildSchema(`

    type Promo {
      _id: ID!
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    input PromoInput {
      title: String!
      description: String!
      price: Float!
      date: String!
    }

    type RootQuery {
      promos: [Promo!]!
    }

    type RootMutation {
      createPromo(promoInput: PromoInput): Promo
    }

    schema {
      query: RootQuery
      mutation: RootMutation
    }
  `),
    rootValue: {
      promos: () => {
        return promos;
      },
      createPromo: arg => {
        const promo = {
          _id: Math.random().toString(),
          title: arg.promoInput.title,
          description: arg.promoInput.description,
          price: +arg.promoInput.price,
          date: arg.promoInput.date,
        };
        promos.push(promo);
        return promo;
      },
    },
    graphiql: true,
  }),
);

app.listen(3000);
