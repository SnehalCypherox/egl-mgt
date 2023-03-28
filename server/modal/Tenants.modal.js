const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TenantsSchema = mongoose.Schema({
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  zipcode: {
    type: Number,
  },
  unittype: {
    type: String,
  },
  bedrooms: {
    type: Number,
  },
  fullbathrooms: {
    type: Number,
  },
  halfbathrooms: {
    type: Number,
  },
  additionalrooms: {
    type: Array,
  },
  commonareas: {
    type: Array,
  },
  outside: {
    type: Array,
  },
});

const Tenants = mongoose.model("tenants", TenantsSchema);
module.exports = Tenants;
