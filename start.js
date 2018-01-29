 const mongoose = require('mongoose');

 // import environmental variables from our variables.env file
require('dotenv').config({ path: 'variables.env' });

// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE);
mongoose.Promise = global.Promise; // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`😢 😭 😱 🛑 🛑 🛑 🚯 → ${err.message}`);
});

// Import all models
// require('./models/whatever');


// Start our API server
const app = require('./app');
app.set('port', process.env.PORT || 3001);
const server = app.listen(app.get('port'), () => {
  console.log(`API Server now running → PORT ${server.address().port}, oh yeah!`);
});