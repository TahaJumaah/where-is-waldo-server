require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const router = require("./routes/difficulty");
const checkRouter = require("./api");
const app = express();
const bodyParser = require("body-parser");

app.use(
  session({
    secret: "Sameera So Secret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(cors());
app.use(bodyParser.json());
app.use(checkRouter);
app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on Port: ${process.env.PORT}`);
});
