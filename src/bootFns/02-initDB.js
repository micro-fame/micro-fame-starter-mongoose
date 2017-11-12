const Promise = require('bluebird');
const mongoose = require('mongoose');
const { registerConnection } = require('../lib/DSModelRegistry');
mongoose.Promise = Promise;
module.exports = async function (app) {
  const con = await mongoose.connect('mongodb://127.0.0.1/test', {
    promiseLibrary: Promise,
    loggerLevel: 'error',
    useMongoClient: true,
    autoIndex: false,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 10,
    bufferMaxEntries: 0
  });
  console.log('DB connected ', con.db.databaseName);
  registerConnection('mongo', con);
  app.set('db', con);
  app.set('models', con.models);
};
