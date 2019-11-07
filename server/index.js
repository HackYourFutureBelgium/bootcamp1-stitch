const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const routes = require('./routes/route');


const app = express();

const port = process.env.PORT || 4000;

app.use('/', routes);
app.use(cors());

const uri = process.env.ATLAS_URI;
console.log(uri);
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB database connection established successfully");
  })
  .catch((err) => {
    console.log(error)
  });


app.listen(port, () => {
  console.log('server running at ' + port);
});