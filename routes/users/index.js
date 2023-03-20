const express = require('express');
const router = express.Router();

const UserService = require('../../services/UserService');

module.exports = (config) => {
  const userService = new UserService(config.postgres.client);

  //create user
  router.post('/create', async (req, res, next) => {
    try {
      const user = await userService.createUser(req.body);
      res.send(user);
    } catch (err) {
      return next(err);
    }
  });

  //get users
  router.get('/getAll', async (req, res, next) => {
    try {
      const user = await userService.getUsers();
      res.send(user);
    } catch (err) {
      return next(err);
    }
  });

  //get users with attributes
  router.get('/all/attributes', async (req, res, next) => {
    try {
      const user = await userService.getAllUsersWithAttributes();
      res.send(user);
    } catch (err) {
      return next(err);
    }
  });

  return router;
};
