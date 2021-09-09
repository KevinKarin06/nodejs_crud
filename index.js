const express = require("express");
const mongoose = require("mongoose");

const app = express();

const url =
  "mongodb+srv://kevinkarin:kevinkarin1@cluster0.tcvhc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url, { useNewUrlParser: true });
const conn = mongoose.connection;
app.use(express.json());
try {
  conn.on("open", () => {
    console.log("connected");
  });
} catch (error) {
  console.log("Error: " + error);
}
const router = require("./Routes/router");
app.use("/students", router);
const port = 9000;
app.listen(port, function () {
  console.log("Server Started");
});
