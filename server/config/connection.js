const mongoose = require('mongoose');
require('dotenv').config();


mongoose.connect(process.env.MONGODB_URI || process.env.APP_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,    
});

module.exports = mongoose.connection;
