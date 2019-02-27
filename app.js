const express = require('express');
const bodyParser = require('body-parser');
const graphqlHttp = require('express-graphql');
const { buildSchema } = require('graphql');
const mongoose = require('mongoose');
const Promo = require('./models/promo');
const app = express();

// uses the body-parser to parse any incoming HTTP request bodies
app.use(bodyParser.json());

// Defining the graphql query & mutation schemas
// Type of the expected data
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
        return Promo.find()
          .then(promos => {
            return promos.map(promo => {
              return { ...promo._doc, _id: promo._doc._id.toString() };
            });
          })
          .catch(err => {
            throw err;
          });
      },
      createPromo: arg => {
        const promo = new Promo({
          title: arg.promoInput.title,
          description: arg.promoInput.description,
          price: +arg.promoInput.price,
          date: new Date(arg.promoInput.date),
        });
        return promo
          .save()
          .then(res => {
            console.log(res);
            return { ...res._doc, _id: res._doc._id.toString() };
          })
          .catch(err => {
            console.log(err);
            throw err;
          });
      },
    },
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
