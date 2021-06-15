const User = require("../models/User");
const bcrypt = require("bcrypt");

module.exports = {
  async createUser(req, res) {
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

        return res.json({ 
          _id: user._id,
          email: user.email,
          firstName: user.firstName,
          lastName: user.lastName
        });
      }

      return res.status(400).json({
        message: "email/user already exist",
      });
    } catch (error) {
      throw Error(error);
    }
  },

  async getUserById(req, res){
    
    const { userId } = req.params;
    console.log(userId)
    try {
      const user = await User.findById(userId);

      return res.json(user);
    } catch (error) {
      return res.status(400).json({
        message: 'User Id does not exist, Do you want to register?'
      })
    }
  }
};
