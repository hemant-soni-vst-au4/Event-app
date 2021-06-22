const Event = require("../models/Event.js");
const User = require("../models/User.js");

module.exports = {
  async createEvent(req, res) {
    const { title, description, price, sport, date } = req.body;
    const { user_id } = req.headers;
    const { filename } = req.file;

    const user = await User.findById(user_id);

    if (!user) {
      return res.status(404).json({ message: "user does not exist" });
    }

    const event = Event.create({
      title,
      description,
      sport,
      price: parseFloat(price),
      user: user_id,
      thumbnail: filename,
      date,
    });

    return res.json(event);
  },

  async delete(req, res) {
    const { eventId } = req.params;
    try {
      await Event.findByIdAndDelete(eventId);
      return res.status(204);
    } catch (error) {
      return res
        .status(404)
        .json({ message: "We don't have any Event with this id" });
    }
  },
};
