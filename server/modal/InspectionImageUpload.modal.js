const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const InspectionImageUploadShema = new Schema({
  unitname: {
    type: String,
  },
  area: {
    type: String,
  },
  feature: {
    type: String,
  },
  images: {
    type: Array,
  },
  notes: {
    type: String,
  },
  rating: {
    type: String,
  },
  added_date: {
    type: Date,
    default: Date.now,
  },
  update_date: {
    type: Date,
    default: Date.now,
  },
});

const InspectionImageUpload = mongoose.model(
  "InspectionImages",
  InspectionImageUploadShema
);
module.exports = InspectionImageUpload;
