const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');

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

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@cluster0-j9chw.mongodb.net/test?retryWrites=true`,
  )
  .then(() => {
    app.listen(3000);
  })
  .catch(err => console.log(err));
