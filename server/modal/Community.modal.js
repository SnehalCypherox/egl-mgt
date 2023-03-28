const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommunitySchema = new Schema({
  email: {
    type: String,
    required: true,
  },
  communityname: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  zipcode: {
    type: Number,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
});

const Community = mongoose.model("community", CommunitySchema);
module.exports = Community;
