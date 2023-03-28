const express = require("express");
let { manager } = require("../helper/permissions");
const router = express.Router();
const Building = require("../modal/Building.modal");
let uploads = require("../Middleware/uploads");
const csv = require("csvtojson");

router.post("/addbuilding", manager, async (req, res, next) => {
  try {
    const {
      email,
      buildingname,
      address,
      city,
      zipcode,
      type,
      floors,
      amenities_and_commanarea,
      team,
    } = req.body;
    const building = new Building({
      email,
      buildingname,
      address,
      city,
      zipcode,
      type,
      floors,
      amenities_and_commanarea,
      team,
    });
    await building.save();

    res.send({
      status: 200,
      message: "Building added successfully",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/getbuilding/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Building.find();
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.put("/updatebuilding/:id", manager, async (req, res, next) => {
  try {
    const {
      email,
      buildingname,
      address,
      city,
      zipcode,
      floors,
      amenities_and_commanarea,
      team,
    } = req.body;
    await Building.findByIdAndUpdate(req.params.id, {
      email:email,
      buildingname: buildingname,
      address: address,
      city: city,
      zipcode: zipcode,
      floors: floors,
      amenities_and_commanarea: amenities_and_commanarea,
      team: team,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/deletebuilding/:id", async (req, res, next) => {
  try {
    await Building.deleteOne({ _id: `${req.params.id}` });
    res.send({
      status: 200,
      message: "building deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/getbuildings/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    const data = await Building.find({ email: email });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.post("/addbuildingcsv", manager, uploads.single("csv"), (req, res) => {
  if (req.file) {
    //convert csvfile to jsonArray
    csv()
      .fromFile(req.file.path)
      .then(async (jsonObj) => {
        try {
          const docs = jsonObj;

          const options = { ordered: true };
          const result = await Building.insertMany(docs, options);
          res.send(result);
        } catch (error) {
          console.log(error);
        }
      });
  } else {
    res.send("Need to upload csv file");
  }
});

module.exports = router;
