var path = require("path");
const router = require("express").Router();


module.exports = function() {
  router.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
  });
};