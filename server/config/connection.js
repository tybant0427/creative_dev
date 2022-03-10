const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://tybant0427:ralf0926@cluster0.bomlg.mongodb.net/creative-dev?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true, 
  useCreateIndex: true,
  useFindAndModify: false,   
});

module.exports = mongoose.connection;
