const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const UnitSchema = new Schema({
  email: {
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
  type: {
    type: String,
    required: true,
  },
  team: {
    type: String,
    required: true,
  },
  lastinspectioncompleted: {
    type: String,
    required: true,
  },
  bedrooms: {
    type: Number,
    required: true,
  },
  fullbathrooms: {
    type: Number,
    required: true,
  },
  halfbathrooms: {
    type: Number,
    required: true,
  },
  additionalrooms: {
    type: Array,
    required: true,
  },
  commonareas: {
    type: Array,
    required: true,
  },
  outside: {
    type: Array,
    required: true,
  },
});
const Unit = mongoose.model("unit", UnitSchema);
module.exports = Unit;
