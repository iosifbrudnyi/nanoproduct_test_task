require('dotenv').config()
const cors = require('cors')
const express = require('express');
const router = require('./routes/index');
const startNotify = require('./services/notifications');
const PORT = process.env.PORT || 5000


var app = express();
app.use(cors());
app.use(express.json());
app.use('/api', router);

const start = () => {
    app.listen(PORT, console.log(`SERVER STARTED ON PORT ${PORT}`))
    startNotify()
}

start()