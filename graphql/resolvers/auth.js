const bcrypt = require('bcryptjs');
const User = require('../../models/user');

module.exports = {
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
      return { ...res._doc, password: null, _id: res.id };
    } catch (err) {
      throw err;
    }
  },
};
