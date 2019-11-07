require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/route');
const cors = require('cors');
//const mongoose = require('mongoose');


const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use('/', routes);
app.use(cors());

// const uri = process.env.DB_URI;
// console.log(uri);
// mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("MongoDB database connection established successfully");
//   })
//   .catch((err) => {
//     console.log(error)
//   });


app.listen(port, () => {
  console.log('server running at ' + port);
});