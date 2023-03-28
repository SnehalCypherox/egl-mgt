const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TeamSchema = new Schema({
  name: {
    type: String,
  },
  internallabel: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Team = mongoose.model("teams", TeamSchema);
module.exports = Team;
