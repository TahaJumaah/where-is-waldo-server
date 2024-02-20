const express = require("express");
const session = require("express-session");
const { DateTime } = require("luxon");
const router = express.Router();

router.get("/play/:difficulty", (req, res, next) => {
  switch (req.params.difficulty) {
    case "Easy":
      req.session.startTime = DateTime.now();
      res.json(req.session);
      break;

    case "Medium":
      req.session.startTime = DateTime.now();
      res.json(req.session);
      break;
    case "Hard":
      req.session.startTime = DateTime.now();
      res.json(req.session);

    default:
      res.json("YOu aint playin you nO0ob");
      break;
  }
});
module.exports = router;
