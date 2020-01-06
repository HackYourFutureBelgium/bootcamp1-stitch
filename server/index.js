require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const { MONGODB_URL } = process.env;
const {MONGODB_LOCAL} = process.env;


mongoose.Promise = global.Promise;
mongoose
  .connect( MONGODB_LOCAL , { useFindAndModify: false, useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => { console.log('Database connection established'); })
  .catch((err) => {
    console.error(`Database error, exiting. Stack trace:\n${err}`);
    process.exit();
  });


const app = express();
const port = 4000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send("Hello World");
});

app.get('/api', (req, res) => {
  res.json({ message: 'API ready' });
});

const apiServices = require("./services");
app.use("/api", apiServices);

app.listen(port, function () {
  console.log('server running at ' + port);
});
