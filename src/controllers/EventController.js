const Event = require('../models/Event.js');
const User = require('../models/User.js');


module.exports = {
    async createEvent (req, res) {
        const {title, description, price } = req.body;        
        const { user_id } = req.headers;
        const { filename } = req.file;
        
        const user = await User.findById(user_id);

        if(!user) {
            return res.status(404).json({ message: 'user is not exist' });
        }

        const event = Event.create({
            title,
            description,
            price: parseFloat(price),
            user: user_id,
            thumbnail: filename,
        })

        return res.json(event);
    }
}