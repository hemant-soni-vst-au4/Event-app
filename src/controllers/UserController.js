const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async store(req, res) {
    try {
      const { firstName, lastName, password, email } = req.body;
      
      const existenUser = await User.findOne({ email });

      if (!existenUser) {
        const hashPasword = await bcrypt.hash(password, 10);
        const user = await User.create({
          firstName,
          lastName,
          password: hashPasword,
          email,
        });

        return res.json(user);
      }

      return res.status(400).json({
        message: "email/user already exist",
      });
    } catch (error) {
      throw Error(error);
    }
  },
};
