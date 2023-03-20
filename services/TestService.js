const Models = require('../models/index.js');

class TestService {
  constructor(sequelize) {
    Models(sequelize);
    this.client = sequelize;
    this.models = sequelize.models;
  }

  //declare all CRUD operations here
  async getTestData() {
    return 'TodoService: Getting a Test Data from Database';
  }
}

module.exports = TestService;
