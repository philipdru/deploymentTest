var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Dog = require('./models/dogModel'),
  bodyParser = require('body-parser');

// mongo related
const db = mongoose.connection;
var mongoUrl = "mongodb://localhost/dog";
var mlabMongoUrl = "mongodb://ds119060.mlab.com:19060/dog_db";

db.on('error', err => {
  console.error(`Error while connecting to DB: ${err.message}`);
});
db.once('open', () => {
  console.log('DB connected successfully!');
});
mongoose.Promise = global.Promise;

mongoose.connect(mlabMongoUrl, {
  auth: {
   user: 'doggy',
   password: 'a1234567',
  }}).then(() => console.log('connection successful'))
  .catch((err) => console.error(err));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes');
routes(app);

app.listen(port);

console.log('API server started on: ' + port);