const { send } = require('micro');
const Errorhandler = (app) => fn => async (req, res) => {
  try {
    return await fn(req, res);
  } catch (err) {
    console.log('err-handler', err);
    let error = new Error();
    send(res, error.statusCode || error.status || 500, { error });
  }
};

module.exports = Errorhandler;
