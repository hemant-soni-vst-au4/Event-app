const Event = require("../models/Event.js");

module.exports = {
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
}