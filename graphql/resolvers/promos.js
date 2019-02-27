const Promo = require('../../models/promo');
const User = require('../../models/user');
const { transformPromo } = require('./helper');

module.exports = {
  // Graphql resolver to 'Query' promos in mongoDB
  promos: async () => {
    try {
      const promos = await Promo.find();
      return promos.map(promo => {
        return transformPromo(promo);
      });
    } catch (err) {
      throw err;
    }
  },
  // Graphql mutation to create new promos in mongoDB
  createPromo: async arg => {
    const promo = new Promo({
      title: arg.promoInput.title,
      description: arg.promoInput.description,
      price: +arg.promoInput.price,
      date: new Date(arg.promoInput.date),
      creator: '5c7716b85354473872c92531',
    });

    let createdPromo;
    try {
      const res = await promo.save();
      createdPromo = transformPromo(res);
      const creator = await User.findById('5c7716b85354473872c92531');

      if (!creator) {
        throw new Error('User not found');
      }

      creator.createdPromos.push(promo);
      await creator.save();

      return createdPromo;
    } catch (err) {
      throw err;
    }
  },
};
