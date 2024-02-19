require("dotenv").config();
const express = require("express");
const cors = require("cors");
const session = require("express-session");
const router = require("./routes/difficulty");
const app = express();

app.use(
  session({
    secret: "sameera",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(cors());

app.use(router);

app.listen(process.env.PORT, () => {
  console.log(`Server Listening on Port: ${process.env.PORT}`);
});
