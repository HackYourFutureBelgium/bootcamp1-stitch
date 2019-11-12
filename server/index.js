<<<<<<< HEAD
=======
/*require('dotenv').config();
const express = require ('express');
const bodyParse = require ('body-parser');
const routes = require('./routes/route');
//const mongoose = require ('mongoose');


const app = express();
const port = process.env.PORT || 4000;

app.use(bodyParse.json());

app.use('/', routes);

app.listen(port, function(){
    console.log('server running at ' +port);
});*/

>>>>>>> feature/create-server-side-V2
module.exports = require("./services");