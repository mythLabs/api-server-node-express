
const  express  = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const app = express();

const router = require('./router');


// AppSetup
app.use(morgan('combined')); //request logging
app.use(bodyParser.json({type: '*/*'})); //parse as json
router(app); //routes


//Server setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);

server.listen(port);
console.log(`Server listening on ${port}`)