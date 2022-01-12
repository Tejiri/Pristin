const express = require("express");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

mongoose.connect(
  "mongodb+srv://pristin:pristin@pristin.nrzvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

  (err) => {
    console.log(err);
  }
);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
