const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Tenants = require("../modal/Tenants.modal");
let multer = require("multer");
let path = require("path");

let uploads = require("../Middleware/uploads");
const csv = require("csvtojson");

let upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
      }
      callback(null, "./unituploads");
    },
    filename: (req, file, callback) => {
      callback(
        null,
        file.fieldname + "-" + Date.now() + path.extname(file.originalname)
      );
    },
  }),

  fileFilter: (req, file, callback) => {
    let ext = path.extname(file.originalname);
    if (ext !== ".png" && ext !== ".jpg" && ext !== ".gif" && ext !== ".jpeg") {
      return callback(/*res.end('Only images are allowed')*/ null, false);
    }
    callback(null, true);
  },
});

const imageStorage = multer.diskStorage({
  // destination to  storage
  destination: "./unitupload",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
const imageUpload = multer({
  storage: imageStorage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg)$/)) {
      // upload only png and jpg format
      return cb(new Error("Please upload a Image"));
    }
    cb(undefined, true);
  },
});

router.post("/addtenants", async (req, res, next) => {
  try {
    const {
      address,
      city,
      zipcode,
      unittype,
      bedrooms,
      fullbathrooms,
      halfbathrooms,
      additionalrooms,
      commonareas,
      outside,
    } = req.body;
    const tenants = new Tenants({
      address,
      city,
      zipcode,
      unittype,
      bedrooms,
      fullbathrooms,
      halfbathrooms,
      additionalrooms,
      commonareas,
      outside,
    });
    await tenants.save();

    res.send({
      status: 200,
      message: "Tenants added successfully",
    });
  } catch (error) {
    next(error);
  }
});

router.put("/updatetenants/:id", async (req, res, next) => {
  try {
    const {
      address,
      city,
      zipcode,
      unittype,
      bedrooms,
      fullbathrooms,
      halfbathrooms,
      additionalrooms,
      commonareas,
      outside,
    } = req.body;
    await Tenants.findByIdAndUpdate(req.params.id, {
      address: address,
      city: city,
      zipcode: zipcode,
      unittype: unittype,
      bedrooms: bedrooms,
      fullbathrooms: fullbathrooms,
      halfbathrooms: halfbathrooms,
      additionalrooms: additionalrooms,
      commonareas: commonareas,
      outside: outside,
    });

    res.send({
      status: 200,
      message: "Tenants update successfully",
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/deletetenants/:id", async (req, res, next) => {
  try {
    await Tenants.deleteOne({ _id: `${req.params.id}` });
    res.send({
      status: 200,
      message: "tenants deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});

router.get("/gettenants/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Tenants.find();
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.post("/addtenantscsv", uploads.single("csv"), (req, res) => {
  if (req.file) {
    //convert csvfile to jsonArray
    csv()
      .fromFile(req.file.path)
      .then(async (jsonObj) => {
        try {
          const docs = jsonObj;
          const options = { ordered: true };
          const result = await Tenants.insertMany(docs, options);
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
