const express = require("express");
const session = require("express-session");
const { DateTime } = require("luxon");
const router = express.Router();
const waldoSolution = require("../waldoSolution");

router.get("/", (req, res, next) => {
  req.session.startTime = null;
  if (!req.session.views) {
    req.session.views = 1;
  } else req.session.views = req.session.views + 1;
  res.json(req.session);
});

router.get("/play/:difficulty", (req, res, next) => {
  req.session.startTime = DateTime.now();

  res.json({
    body: req.body,
    session: req.session,
  });
});

router.get("/api/submit", (req, res, next) => {
  if (
    req.body.percentX ==
    (waldoSolution.Easy.percentX || waldoSolution.Easy.percentXMobile)
  ) {
    console.log("crrct X");
    res.json("crcct X");
  }
  if (
    req.body.percentY ==
    (waldoSolution.Easy.percentY || waldoSolution.Easy.percentYMobile)
  ) {
    res.write("crrct Y");
  }
  res.end();
});
module.exports = router;
