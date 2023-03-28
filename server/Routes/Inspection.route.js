const express = require("express");
const router = express.Router();
const Inspection = require("../modal/Inspection.modal");
const InspectionImageUpload = require("../modal/InspectionImageUpload.modal");
const uploads = require("../Middleware/uploads");

router.post("/addunitinspection", async (req, res, next) => {
  try {
    const {
      email,
      unitname,
      typeofinspection,
      duedate,
      inspectionrecurring,
      Who_should_complete_this_inspection,
    } = req.body;
    const inspection = new Inspection.UnitInspection({
      email,
      unitname,
      typeofinspection,
      duedate,
      inspectionrecurring,
      Who_should_complete_this_inspection,
    });
    await inspection.save();
    res.send({
      status: 200,
      message: "Unit added successfully",
    });
  } catch (error) {
    next(error);
  }
});

router.put("/updateunitinspection/:id", async (req, res, next) => {
  try {
    const {
      email,
      unitname,
      typeofinspection,
      duedate,
      inspectionrecurring,
      Who_should_complete_this_inspection,
    } = req.body;
    await Inspection.UnitInspection.findByIdAndUpdate(req.params.id, {
      email: email,
      unitname: unitname,
      typeofinspection: typeofinspection,
      duedate: duedate,
      inspectionrecurring: inspectionrecurring,
      Who_should_complete_this_inspection: Who_should_complete_this_inspection,
    });
    res.send("Unit Updated Sucessfully");
  } catch (error) {
    next(error);
  }
});

router.get("/getunitinspection/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    const data = await Inspection.UnitInspection.find({email:email});
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.delete("/deleteunitinspection/:id", async (req, res, next) => {
  try {
    await Inspection.UnitInspection.deleteOne({ _id: `${req.params.id}` });
    res.send("Unit deleted successfully");
  } catch (error) {
    next(error);
  }
});

router.post("/addbuildinginspection", async (req, res, next) => {
  try {
    const {
      buildingname,
      typeofinspection,
      duedate,
      inspectionrecurring,
      features,
      inspectionlabel,
      Who_should_complete_this_inspection,
    } = req.body;
    const inspection = new Inspection.BuildingInspection({
      buildingname,
      typeofinspection,
      duedate,
      inspectionrecurring,
      features,
      inspectionlabel,
      Who_should_complete_this_inspection,
    });
    await inspection.save();
    res.send({
      status: 200,
      message: "Building added successfully",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/getbuildinginspection/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Inspection.BuildingInspection.findById(id);
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.put("/updatebuildinginspection/:id", async (req, res, next) => {
  try {
    const {
      buildingname,
      typeofinspection,
      duedate,
      inspectionrecurring,
      features,
      inspectionlabel,
      Who_should_complete_this_inspection,
    } = req.body;
    await Inspection.BuildingInspection.findByIdAndUpdate(req.params.id, {
      buildingname: buildingname,
      typeofinspection: typeofinspection,
      duedate: duedate,
      inspectionrecurring: inspectionrecurring,
      features: features,
      inspectionlabel: inspectionlabel,
      Who_should_complete_this_inspection: Who_should_complete_this_inspection,
    });
    res.send("Building Updated Sucessfully");
  } catch (error) {
    next(error);
  }
});

router.delete("/deletebuildinginspection/:id", async (req, res, next) => {
  try {
    await Inspection.BuildingInspection.deleteOne({ _id: `${req.params.id}` });
    res.send("Building deleted successfully");
  } catch (error) {
    next(error);
  }
});

router.post("/addcommunityinspection", async (req, res, next) => {
  try {
    const {
      communityname,
      typeofinspection,
      duedate,
      inspectionrecurring,
      features,
      inspectionlabel,
      Who_should_complete_this_inspection,
    } = req.body;
    const inspection = new Inspection.CommunityInspection({
      communityname,
      typeofinspection,
      duedate,
      inspectionrecurring,
      features,
      inspectionlabel,
      Who_should_complete_this_inspection,
    });
    await inspection.save();
    res.send({
      status: 200,
      message: "Community added successfully",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/getcommunityinspection/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Inspection.CommunityInspection.findById(id);
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.put("/updatecommunityinspection/:id", async (req, res, next) => {
  try {
    const {
      communityname,
      typeofinspection,
      duedate,
      inspectionrecurring,
      features,
      inspectionlabel,
      Who_should_complete_this_inspection,
    } = req.body;
    await Inspection.CommunityInspection.findByIdAndUpdate(req.params.id, {
      communityname: communityname,
      typeofinspection: typeofinspection,
      duedate: duedate,
      inspectionrecurring: inspectionrecurring,
      features: features,
      inspectionlabel: inspectionlabel,
      Who_should_complete_this_inspection: Who_should_complete_this_inspection,
    });
    res.send("Community Updated Sucessfully");
  } catch (error) {
    next(error);
  }
});

router.delete("/deletecommunityinspection/:id", async (req, res, next) => {
  try {
    await Inspection.CommunityInspection.deleteOne({ _id: `${req.params.id}` });
    res.send("Community deleted successfully");
  } catch (error) {
    next(error);
  }
});

router.post(
  "/addinspectionimageupload",
  uploads.array("images"),
  async (req, res, next) => {
    try {
      const { unitname, area, feature, notes, rating } = req.body;
      const inspectionimg = new InspectionImageUpload({
        unitname,
        area,
        feature,
        notes,
        rating,
      });
      if (req.files) {
        let path = "";
        req.files.forEach(function (files, index, arr) {
          path = path + files.path + ",";
        });
        path = path.substring(0, path.lastIndexOf(","));
        inspectionimg.images = path;
      }
      await inspectionimg.save();
      res.send({
        status: 200,
        message: "Inspection images added successfully",
      });
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/updateinspectionimageupload",
  uploads.array("images"),
  async (req, res, next) => {
    try {
      const { unitname, area, feature, notes, rating } = req.body;
      await InspectionImageUpload.findByIdAndUpdate(req.params.id, {
        unitname,
        area,
        feature,
        notes,
        rating,
      });
      if (req.files) {
        let path = "";
        req.files.forEach(function (files, index, arr) {
          path = path + files.path + ",";
        });
        path = path.substring(0, path.lastIndexOf(","));
        InspectionImageUpload.images = path;
      }
      await InspectionImageUpload.save();
      res.send({
        status: 200,
        message: "Inspection images updated successfully",
      });
    } catch (error) {
      next(error);
    }
  }
);

router.get("/getinspectionimageupload/:unitname", async (req, res, next) => {
  try {
    const { unitname } = req.params;
    const data = await InspectionImageUpload.find({ unitname });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.delete("/deleteinspectionimageupload/:unitname", async (req, res, next) => {
  try {
    const { unitname } = req.params;
    const data = await InspectionImageUpload.deleteOne({ unitname });
    res.send(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
