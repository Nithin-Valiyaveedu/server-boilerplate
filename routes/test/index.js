const express = require('express');

const router = express.Router();

module.exports = (testService) => {
  router.get('/', async (req, res, next) => {
    try {
      const testData = await testService.getTestData();
      console.log(testData);
      res.status(200).send(testData)
    } catch (err) {
      return next(err)
    }
  });
  return router;
};
