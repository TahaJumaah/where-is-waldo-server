const express = require("express");
const router = express.Router();
const { DateTime } = require("luxon");
const Waldo = require("./waldoSolution");
const session = require("express-session");

function checkSolution(solX, solY, difficulty, device) {
  function XInRange(solX, solY, difficulty, device) {
    if (
      solX >= Waldo[difficulty][device].percentX[0] &&
      solX <= Waldo[difficulty][device].percentX[2]
    ) {
      return true;
    } else {
      return false;
    }
  }
  function YInRange(solx, solY, difficulty, device) {
    if (
      solY >= Waldo[difficulty][device].percentY[0] &&
      solY <= Waldo[difficulty][device].percentY[2]
    ) {
      return true;
    } else {
      return false;
    }
  }
  const consoleXRange = XInRange(solX, solY, difficulty, device);
  const consoleYRange = YInRange(solX, solY, difficulty, device);
  if (consoleXRange == true && consoleYRange == true) {
    return true;
  } else {
    return false;
  }
}

router.post("/api/:difficulty/check", (req, res, next) => {
  const difficulty = req.params.difficulty;
  const solX = req.body.solX;
  const solY = req.body.solY;
  const device = req.body.device;
  console.log("got a check request");
  console.log(req.body);
  if (solX && solY && difficulty) {
    console.log("sending solution to CheckingFunction");
    const finalSolution = checkSolution(solX, solY, difficulty, device);
    if (finalSolution == true) {
      res.json({ waldoFound: true });
    } else {
      res.json({ waldoFound: false });
    }
  } else {
    console.log("SolX, SolY, or Difficutly not Provided for check");
    res.end();
  }
});

module.exports = router;
