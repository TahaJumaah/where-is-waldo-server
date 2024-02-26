const express = require("express");
const session = require("express-session");
const { DateTime } = require("luxon");
const router = express.Router();

router.get("/play/:difficulty", (req, res, next) => {
  switch (req.params.difficulty) {
    case "Easy":
      if (!req.session.startTime) {
        req.session.startTime = DateTime.now();
      }
      res.send(req.session);

      break;

    case "Medium":
      if (!req.session.startTime) {
        req.session.startTime = DateTime.now();
        // console.log(req.sessionID);
      }
      res.json(req.session);
      break;
    case "Hard":
      if (!req.session.startTime) {
        req.session.startTime = DateTime.now();
      }
      res.json(req.session);
      break;

    default:
      res.json("YOu aint playin you nO0ob");
      break;
  }
});

router.get("/startSession", (req, res) => {
  res.json(req.session.destroy());
});

router.get("/getSession", (req, res) => {
  res.json(req.session);
});

module.exports = router;
