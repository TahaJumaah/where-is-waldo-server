const express = require("express");
const session = require("express-session");
const { DateTime } = require("luxon");
const router = express.Router();

function handleStartSession(req, res, next) {
  req.session.startTime = DateTime.now();
  res.json(req.session);
}

router.get("/", (req, res, next) => {
  if (req.session.startTime) {
    req.session.startTime = null;
  }
  console.log("Request to HOME");
  res.json(req.session);
});

router.get("/play/:difficulty", handleStartSession);
module.exports = router;
