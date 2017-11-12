const { RestService, Remote } = require('micro-fame');
const BaseService = require('./BaseService');

@RestService()
class User extends BaseService {
  @Remote({
    path: '/',
    method: 'get'
  })
  async index() {
    const { User } = this.models();
    const u = await User.findOne();
    return {
      fn: u.getFullName(),
      fng: u.fullName
    };
  }

  @Remote({
    path: '/save/:fn/:ln'
  })
  async save(fn, ln) {
    const { User } = this.models();
    const u = new User({
      firstName: fn,
      lastName: ln,
      t: 9,
      obj: {
        key1: fn,
        key2: ln,
        key3: fn + ln
      }
    });
    return await u.save();
  }

  @Remote({
    path: '/update/:fn'
  })
  async update(fn) {
    const { User } = this.models();
    return await User.findOneAndUpdate({ firstName: fn },
      { $set: { lastName: 'lastName1' } }, { new: true });
  }

  @Remote({
    path: '/paramsFromQuery',
    args: {
      text: ({ query: { text } }) => text,
      number: ({ query: { number } }) => number
    }
  })
  async paramsFromQuery(text, number) {
    return { text, number };
  }

  @Remote({
    path: '/mixParams/:name',
    method: 'get',
    args: {
      name: ({ params: { name } }) => name,
      text: ({ query: { text } }) => text,
      number: ({ query: { number } }) => number
    }
  })
  async mixParams(name, text, number) {
    return { name, text, number };
  }

  @Remote({
    path: '/mixParams/:name',
    method: 'post',
    args: {
      name: ({ params: { name } }) => name,
      text: ({ query: { text } }) => text,
      number: ({ body: { number } }) => number
    }
  })
  async mixParamsQB(name, text, number) {
    return { name, text, number };
  }

};

module.exports = User;
