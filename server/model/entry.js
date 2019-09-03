const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Entry = new Schema({
  entry_title: {
    type: String
  },
  entry_content: {
    type: String
  },
  entry_date: {
    type: String
  },
  entry_starred: {
    type: Boolean
  }
});

module.exports = mongoose.model("Entry", Entry);
