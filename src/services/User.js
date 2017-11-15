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
      firstName: 1,
      lastName: ln,
      t: 9,
      obj: {
        key1: fn,
        key2: ln,
        key3: fn + ln
      },
      arr: [{
        arr1: fn,
        arr2: 121
      }]
    });
    return await u.save();
  }

  @Remote({
    path: '/update/:fn'
  })
  async update(fn) {
    const { User } = this.models();
    return await User.findOneAndUpdate({ firstName: fn },
      { $set: { lastName: 'lastName1', no: '34gg3' } }, { runValidators: true, new: true });
  }
};

module.exports = User;
