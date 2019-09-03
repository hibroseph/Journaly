const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const entriesRoutes = express.Router();
const PORT = 4000;

let Entry = require("./model/entry");

app.use(cors());
app.use(bodyParser.json());

mongoose.connect("mongodb://127.0.0.1:27017/entries", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB db connection luckily established!");
});

entriesRoutes.route("/").get(function(req, res) {
  Entry.find(function(err, entries) {
    if (err) {
      console.log(err);
    } else {
      res.json(entries);
    }
  });
});

entriesRoutes.route("/add").post(function(req, res) {
  let entry = new Entry(req.body);
  entry
    .save()
    .then(entry => {
      res.status(200).json({ entry: "entry added successfully" });
    })
    .catch(err => {
      res.status(400).send("Adding new entry failed!" + err);
    });
});

app.use("/entries", entriesRoutes);

app.listen(PORT, function() {
  console.log("Serving is a runnin' on Port: " + PORT);
});
