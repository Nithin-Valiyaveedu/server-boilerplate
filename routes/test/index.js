const express = require("express");

const router = express.Router();

module.exports = (testService) => {
  router.get("/", async (req, res, next) => {
    try {
      const testData = await testService.getTestData();
      res.send(testData);
    } catch (err) {
      return next(err);
    }
  });
  return router;
};
