const Authentication = require('./controllers/authentication');

module.exports = function(app) {
  app.get("/", function(req, res, next) {
      res.send(['a','b']);
  });

  app.post('/signup',Authentication.signup)

};
