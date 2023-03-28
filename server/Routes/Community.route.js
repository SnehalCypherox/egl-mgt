const express = require("express");
const router = express.Router();
let uploads = require("../Middleware/uploads");
const Community = require("../modal/Community.modal");
const csv = require("csvtojson");
let { manager } = require("../helper/permissions");

router.post("/addcommunity", manager, async (req, res, next) => {
  try {
    const { communityname, address, city, zipcode, team, email } = req.body;
    const community = new Community({
      communityname,
      address,
      city,
      zipcode,
      team,
      email,
    });
    await community.save();

    res.send({
      status: 200,
      message: "community added successfully",
    });
  } catch (error) {
    next(error);
  }
});

router.put("/updatecommunity/:id", manager, async (req, res, next) => {
  try {
    const { communityname, address, city, zipcode, team, email } = req.body;
    await Community.findByIdAndUpdate(req.params.id, {
      communityname: communityname,
      address: address,
      city: city,
      zipcode: zipcode,
      team: team,
      email: email,
    });
    res.send({
      status: 200,
      message: "community updated successfully",
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/deletecoomunity/:id/:role", async (req, res, next) => {
  if (req.params === "manager || superadmin") {
    try {
      await Community.deleteOne({ _id: `${req.params.id}` });
      res.send({
        status: 200,
        message: "community deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  } else {
    res.send("Not Allowed");
  }
});

router.post("/addcommunitycsv", manager, uploads.single("csv"), (req, res) => {
  if (req.file) {
    //convert csvfile to jsonArray
    csv()
      .fromFile(req.file.path)
      .then(async (jsonObj) => {
        try {
          const docs = jsonObj;
          const options = { ordered: true };
          const result = await Community.insertMany(docs, options);
          res.send(result);
        } catch (error) {
          console.log(error);
        }
      });
  } else {
    res.send("Need to upload csv file");
  }
});

router.get("/getcommunity/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    const data = await Community.find({ email: email });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
