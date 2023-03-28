const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BuildingSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  buildingname: {
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
  floors: {
    type: Number,
    required: true,
  },
  amenities_and_commanarea: {
    type: Array,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
});

const Building = mongoose.model("building", BuildingSchema);
module.exports = Building;
