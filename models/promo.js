const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Define new schema constructor to map mongoDB collection and define the shape of the documents within the collection
const promoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model('Promo', promoSchema);
