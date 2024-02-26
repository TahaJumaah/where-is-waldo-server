const express = require("express");
const router = express.Router();
const { DateTime } = require("luxon");
const Waldo = require("./waldoSolution");
const session = require("express-session");

function checkEasy(solX, solY, difficulty) {
  // console.log(difficulty);
  // console.log(typeof difficulty);
  // console.log(Waldo[difficulty].percentX);
  if (
    (solX == Waldo[difficulty].percentX &&
      solY == Waldo[difficulty].percentY) ||
    (solX == Waldo[difficulty].percentXMobile &&
      solY == Waldo[difficulty].percentYMobile)
  ) {
    return true;
  } else return false;
}

router.post("/api/:difficulty/check", (req, res, next) => {
  const difficulty = req.params.difficulty;
  const solX = req.body.solX;
  const solY = req.body.solY;
  console.log("got a check request");

  switch (req.params.difficulty) {
    case difficulty:
      if (checkEasy(solX, solY, difficulty) == true) {
        req.session.foundTime = DateTime.now();
        res.json(
          `Congrats, you found him at this time: ${req.session.foundTime} and you started at: ${req.session.startTime} . You played a difficulty of ${difficulty}`
        );
      }
      break;

    default:
      res.json("No difficulty, solX, or solY provided");
      break;
  }
  console.log(req.body);
});

module.exports = router;
