const config = require('./connect');
const mongoose = require('mongoose');

module.exports = () => {
  return new Promise((res, rej) => {
    mongoose.Promise = global.Promise;
    mongoose.set('debug', true);

    mongoose.connection
      .on('error', err => rej(err))
      .on('close', () => console.log('Database connection closed!'))
      .once('open', () => res(mongoose.connection));

    mongoose.connect(config.MONGO_URL, { useNewUrlParser: true });
  });
};
