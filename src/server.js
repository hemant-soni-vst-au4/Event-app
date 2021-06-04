const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello everyone');
})

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})