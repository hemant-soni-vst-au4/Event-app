const Event = require('../models/Event.js');
const User = require('../models/User.js');


module.export = {
    async createEvent (req, res) {
        const {title, description, price } = req.body;        
        const { userId } = req.headers;
        const { filename } = req.file,
        
        const user = await User.findById(userId);

        if(!user) {
            return res.status(404).json({ message: 'user is not exist' });
        }

        const event = Event.create({
            title,
            description,
            price,
            user: userId,
            thumbnail: filename,
        })

        return res.json(event);
    }
}