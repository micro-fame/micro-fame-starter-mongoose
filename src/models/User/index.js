const { Model } = require('../../lib/DSModelRegistry');
const schema = require('./schema');
const BaseModel = require('../BaseModel');

@Model(schema)
class User extends BaseModel {
}

module.exports = User;
