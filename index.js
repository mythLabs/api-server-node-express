
const  express  = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

const router = require('./router');

// DB Setup
mongoose.connect('mongodb://adminMythLabs:admin123@ds115874.mlab.com:15874/api-server-node-express-db', { useNewUrlParser: true })
mongoose.connection.once('open',() => {
    console.log('connected to database');
})

// AppSetup
app.use(morgan('combined')); //request logging
app.use(cors());
app.use(bodyParser.json({type: '*/*'})); //parse as json
router(app); //routes


//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log(`Server listening on ${port}`)