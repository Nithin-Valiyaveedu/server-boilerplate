const express = require('express')

const app = express()

module.exports = (config) => {
  const log = config.log()

  if (app.get('env') === 'development') {
    app.use((req, res, next) => {
      log.debug(`${req.method}: ${req.url}`)
      return next()
    })
  }

  app.use((error, req, res, next) => {

    res.status(error.status || 500)
    // Log out the error to the console
    log.error(error)
    return res.json({
      error: {
        message: error.message
      }
    })
  })
  return app
}
