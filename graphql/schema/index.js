const { buildSchema } = require('graphql');

// Schema of how the graphql data should look like (Types, Inputs, Queries and Mutations)
module.exports = buildSchema(`
type Promo {
  _id: ID!
  title: String!
  description: String!
  price: Float!
  date: String!
  creator: User!
}

type User {
  _id: ID!
  email: String!
  password: String
  createdPromos: [Promo!]
}

input UserInput {
  email: String!
  password: String!
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
  createUser(userInput: UserInput): User
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`);
