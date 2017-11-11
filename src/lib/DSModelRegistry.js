const assert = require('assert');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const _ds = {};
const _models = {};

exports.registerConnection = function (name, connection) {
  assert(name, 'Error in DS name.');

  assert(!Object.keys(_ds).includes(name), `DS name already used. ${name}`);

  _ds[name] = connection;
  console.log('Registry registerDS');
};

exports.registerModel = (name, ds) => {

};

exports.Model = function modelDecorator(schema, options = {}) {
  options.timestamps = true;
  if (!options.autoIndex) {
    options.autoIndex = false;
  }
  return (Class) => {
    const schemaInstance = new Schema(schema);
    schemaInstance.loadClass(Class);
    mongoose.model(Class.name, schemaInstance);
  };
};
