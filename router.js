const Authentication = require("./controllers/authentication");
const passportService = require("./services/passport");
const passport = require("passport");

const requireAuth = passport.authenticate("jwt", { session: false });
const requireSignin = passport.authenticate("local", { session: false });

module.exports = function(app) {
  app.get("/", function(req, res, next) {
    res.send(["a", "b"]);
  });

  app.post("/signup", Authentication.signup);
  app.post("/signin", requireSignin, Authentication.signin);

  app.get("/data", requireAuth, function(req, res) {
    res.send({ data: "You are the Data" });
  });
};
