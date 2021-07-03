const Event = require("../models/Event.js");
const jwt = require("jsonwebtoken");

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
    
      getAllEvents(req, res) {
        jwt.verify(req.token, 'secret', async(err, authData) => {
          if(err) {
            res.sendStatus(403)
          } else {
            try {
              const events = await Event.find({});
        
              if (events) {
                return res.json(authData, events);
              }
            } catch (error) {
              return res.status(404).json({ message: "We don't have any Event yet" });
            }
          }
        })
        
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
      
      async getEventsByUserId(req, res) {
        const { user_id } = req.headers;

        try {
            const events = await Event.find({ user: user_id })

            if (events) {
                return res.json(events)
            }
        } catch (error) {
            return res.status(400).json({ message: `We do have any events with the user_id ${user_id}`})
        }
    },
}