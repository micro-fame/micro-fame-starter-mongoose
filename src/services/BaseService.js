class BaseService {
  models() {
    return this.app.get('models');
  }
}

module.exports = BaseService;
