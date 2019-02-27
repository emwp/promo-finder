const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define the user schema constructor to map mongoDB collection and define the shape of the documents within the collection
const userSchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: string,
    required: true,
  },
  // Allows to related users with created promos
  createdPromos: [
    {
      type: Schema.Types.ObjectId,
      // Ref relating to the Promos model
      ref: 'Promo',
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
