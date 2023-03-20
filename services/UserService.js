const Models = require('../models/index.js');

class UserService {
  constructor(sequelize) {
    Models(sequelize);
    this.client = sequelize;
    this.models = sequelize.models;
  }

  async createUser({ firstName, lastName, email, password }) {
    try {
      const user = await this.models.User.create({
        firstName,
        lastName,
        email,
        password,
      });

      return user;
    } catch (error) {
      return err;
    }
  }

  async getUsers() {
    try {
      const users = await this.models.User.findAll();
      return users;
    } catch (error) {
      return err;
    }
  }

  async getAllUsersWithAttributes() {
    try {
      const users = await this.models.User.findAll({
        attributes: ['firstName', 'lastName'],
        // attributes: { exclud: [] },
      });
      return users;
    } catch (error) {
      return err;
    }
  }
}

module.exports = UserService;
