const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UnitInspectionSchema = new Schema({
  email: {
    type: String,
  },
  unitname: {
    type: String,
    unique: true,
  },
  typeofinspection: {
    type: String,
  },
  duedate: {
    type: Date,
  },
  inspectionrecurring: {
    type: String,
  },
  Who_should_complete_this_inspection: {
    type: String,
  },
});

const UnitInspection = mongoose.model("unitinspection", UnitInspectionSchema);

const BuildingInspectionSchema = new Schema({
  //   email: {
  //     type: String,
  //   },
  buildingname: {
    type: String,
    unique: true,
  },
  typeofinspection: {
    type: String,
  },
  duedate: {
    type: Date,
  },
  inspectionrecurring: {
    type: String,
  },
  features: {
    type: Array,
  },
  inspectionlabel: {
    type: String,
  },
  Who_should_complete_this_inspection: {
    type: Array,
  },
});

const BuildingInspection = mongoose.model(
  "buildinginspection",
  BuildingInspectionSchema
);

const CommunityInspectionSchema = new Schema({
  //   email: {
  //     type: String,
  //   },
  communityname: {
    type: String,
    unique: true,
  },
  typeofinspection: {
    type: String,
  },
  duedate: {
    type: Date,
  },
  inspectionrecurring: {
    type: String,
  },
  features: {
    type: Array,
  },
  inspectionlabel: {
    type: String,
  },
  Who_should_complete_this_inspection: {
    type: Array,
  },
});

const CommunityInspection = mongoose.model(
  "communityinspection",
  CommunityInspectionSchema
);

module.exports = {
  UnitInspection,
  BuildingInspection,
  CommunityInspection,
};
