require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const router = require("./routes/difficulty");
const checkRouter = require("./api");
const app = express();
const bodyParser = require("body-parser");

app.use(cors({ credentials: true, origin: true }));

app.use(
  session({
    secret: "your secret",
    resave: true,
    saveUninitialized: true,
    cookie: {
      secure: true,
      sameSite: true,
    },
  })
);
app.use(bodyParser.json());
app.use(router);

app.use(checkRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on Port: ${process.env.PORT}`);
});
