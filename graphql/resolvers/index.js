const bcrypt = require('bcryptjs');
const Promo = require('../../models/promo');
const User = require('../../models/user');

const promos = promoIds => {
  return Promo.find({ _id: { $in: promoIds } })
    .then(promos => {
      return promos.map(promo => {
        return {
          ...promo._doc,
          _id: promo.id,
          creator: user.bind(this, promo.creator),
        };
      });
    })
    .catch(err => {
      throw err;
    });
};

const user = userId => {
  return User.findById(userId)
    .then(user => {
      return {
        ...user._doc,
        _id: user.id,
        password: null,
        createdPromos: promos.bind(this, user._doc.createdPromos),
      };
    })
    .catch(err => {
      throw err;
    });
};

module.exports = {
  promos: () => {
    return Promo.find()
      .then(promos => {
        return promos.map(promo => {
          return {
            ...promo._doc,
            _id: promo._doc._id.toString(),
            creator: user.bind(this, promo._doc.creator),
          };
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
      creator: '5c7609212f2169237a4ad607',
    });
    let createdPromo;
    return promo
      .save()
      .then(res => {
        createdPromo = {
          ...res._doc,
          _id: res._doc._id.toString(),
          creator: user.bind(this, res._doc.creator),
        };
        return User.findById('5c7609212f2169237a4ad607');
      })
      .then(user => {
        if (!user) {
          throw new Error('User not found');
        }
        user.createdPromos.push(user);
        return user.save();
      })
      .then(res => {
        return createdPromo;
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  },
  createUser: arg => {
    return User.findOne({ email: arg.userInput.email })
      .then(user => {
        if (user) {
          throw new Error('This user is already registered.');
        }
        return bcrypt.hash(arg.userInput.password, 12);
      })
      .then(hashedPassword => {
        const user = new User({
          email: arg.userInput.email,
          password: hashedPassword,
        });
        return user.save();
      })
      .then(res => {
        return { ...res._doc, password: null, _id: res._doc._id.toString() };
      })
      .catch(err => {
        throw err;
      });
  },
};
