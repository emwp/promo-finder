const bcrypt = require('bcryptjs');
const Promo = require('../../models/promo');
const User = require('../../models/user');

// Relates the user to the promo created
const promos = async promoIds => {
  try {
    const promos = await Promo.find({ _id: { $in: promoIds } });
    return promos.map(promo => {
      return {
        ...promo._doc,
        _id: promo.id,
        date: new Date(promo._doc.date).toISOString(),
        creator: user.bind(this, promo.creator),
      };
    });
  } catch (err) {
    throw err;
  }
};

// Relates the promo to the user who created
const user = async userId => {
  try {
    const user = await User.findById(userId);
    return {
      ...user._doc,
      _id: user.id,
      password: null,
      createdPromos: promos.bind(this, user._doc.createdPromos),
    };
  } catch (err) {
    throw err;
  }
};

// Graphql resolvers using the mongoose models for Users and Promos to query mongoDB
module.exports = {
  // Graphql resolver to 'Query' promos in mongoDB
  promos: async () => {
    try {
      const promos = await Promo.find();
      return promos.map(promo => {
        return {
          ...promo._doc,
          _id: promo._doc._id.toString(),
          date: new Date(promo._doc.date).toISOString(),
          creator: user.bind(this, promo._doc.creator),
        };
      });
    } catch (err) {
      throw err;
    }
  },
  // Graphql mutation to create new promos in mongoDB
  createPromo: async arg => {
    try {
      const promo = new Promo({
        title: arg.promoInput.title,
        description: arg.promoInput.description,
        price: +arg.promoInput.price,
        date: new Date(arg.promoInput.date),
        creator: '5c76f11a91369b2500d375b2',
      });
      let createdPromo;
      const res = await promo.save();
      createdPromo = {
        ...res._doc,
        _id: res._doc._id.toString(),
        date: new Date(res._doc.date).toISOString(),
        creator: user.bind(this, res._doc.creator),
      };
      const creator = await User.findById('5c76f11a91369b2500d375b2');
      if (!creator) {
        throw new Error('User not found');
      }
      creator.createdPromos.push(creator);
      await creator.save();

      return createdPromo;
    } catch (err) {
      throw err;
    }
  },
  // Graphql mutation to create new users
  createUser: async arg => {
    try {
      const existingUser = await User.findOne({ email: arg.userInput.email });
      if (existingUser) {
        throw new Error('This user is already registered.');
      }
      const hashedPassword = await bcrypt.hash(arg.userInput.password, 12);
      const user = new User({
        email: arg.userInput.email,
        password: hashedPassword,
      });
      const res = await user.save();
      return { ...res._doc, password: null, _id: res._doc._id.toString() };
    } catch (err) {
      throw err;
    }
  },
};
