const express = require("express");
const routes = require("./routes/routes");
const mongoose = require("mongoose");
const app = express();
const port = 8080 || process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);

mongoose.connect(
  "mongodb+srv://pristin:pristin@pristin.nrzvp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

  (err) => {
    console.log(err);
  }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
