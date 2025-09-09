const express = require("express");
const { connectDb } = require("./config/database");
const cors = require("cors");

const app = express();
const port = 7777;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

connectDb()
  .then(() => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`server is listenting to port:${port}`);
    });
  })
  .catch((err) => {
    console.log("Database not connected", err.message);
    throw err;
  });
