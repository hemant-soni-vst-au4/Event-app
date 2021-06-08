const Event = require("../models/Event.js");
const User = require("../models/User.js");

module.exports = {
  async createEvent(req, res) {
    const { title, description, price, sport } = req.body;
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
    });

    return res.json(event);
  },

  async getEventById(req, res) {
    const { eventId } = req.params;

    try {
      const event = await Event.findById(eventId);

      if (event) {
        return res.json(event);
      }
    } catch (error) {
      return res.status(404).json({ message: "Event does not exist" });
    }
  },

  async getAllEvents(req, res) {
    
    try {
      const events = await Event.find({});

      if (events) {
        return res.json(events);
      }
    } catch (error) {
      return res.status(404).json({ message: "We don't have any Event yet" });
    }
  },

  async getAllSportsEvents(req, res) {
    const { sport } = req.params;
    const query = { sport } || {};
    try {
      const events = await Event.find(query);

      if (events) {
        return res.json(events);
      }
    } catch (error) {
      return res.status(404).json({ message: "We don't have any Event yet" });
    }
  },
};
