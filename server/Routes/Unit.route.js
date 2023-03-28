const express = require("express");
const router = express.Router();
const createError = require("http-errors");
const Unit = require("../modal/Unit.modal");
const UnitUploadDetail = require("../modal/UnitImageUpload.modal");
let fs = require("fs");
let dir = "./unituploads";
let multer = require("multer");
let path = require("path");

let { manager } = require("../helper/permissions");
let uploads = require("../Middleware/uploads");
const csv = require("csvtojson");

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

router.get("/getunitsbyfilter/:type", async (req, res, next) => {
  Unit.aggregate([
    {
      $match: {
        type: `${req.params.type}`,
      },
    },
  ])
    .then((response) => {
      res.json({
        response,
      });
    })
    .catch((error) => {
      res.json({
        message: "An error occured!",
      });
    });
});

router.post(
  "/upload",
  manager,
  imageUpload.single("image"),
  async (req, res, next) => {
    try {
      // let c;
      // UnitUploadDetail.findOne( {}, ( err, data ) =>
      // {

      // if ( data )
      // {
      //     c=data.unique_id+1;
      // } else
      // {
      //     c=1;
      // }
      // console.log( re  q.file[ 0 ] )
      // console.log( "image upload " )
      // let detail=new UnitUploadDetail( {
      //     unique_id: c,
      //     uniname: req.body.unitname,
      //     image1: req.files[ 0 ]&&req.files[ 0 ].filename? req.files[ 0 ].filename:'',
      // } );
      // var filename=req.file.filename;

      // res.send( "image uploaded successfully" );

      // detail.save()
      // detail.save( ( err, Person ) =>
      // {
      //     if ( err )
      //     {
      //         console.log( err );
      //         console.log( req.body.unitname )

      //     }
      //     else
      //         res.redirect( '/' );
      //     res.send( {
      //         status: 200,
      //         message: "Image uploaded successfully"
      //     } )

      // } );

      // } ).sort( { _id: -1 } ).limit( 1 );

      res.send("image upload successfully");
      // var filename=req.file.name
      console.log(req.file.filename);
      // res.send( filename )
    } catch (error) {
      next(error);
    }
    // if ( !req.body&&!req.files )
    // {
    //     res.json( { success: false } );
    // } else
    // {
    //     let c;
    //     Detail.findOne( {}, ( err, data ) =>
    //     {

    //         if ( data )
    //         {
    //             c=data.unique_id+1;
    //         } else
    //         {
    //             c=1;
    //         }

    //         let detail=new Detail( {

    //             unique_id: c,
    //             uniname: req.body.name,
    //             image1: req.files[ 0 ]&&req.files[ 0 ].filename? req.files[ 0 ].filename:'',
    //             image2: req.files[ 1 ]&&req.files[ 1 ].filename? req.files[ 1 ].filename:'',
    //         } );

    //         detail.save( ( err, Person ) =>
    //         {
    //             if ( err )
    //                 console.log( err );
    //             else
    //                 res.redirect( '/' );

    //         } );

    //     } ).sort( { _id: -1 } ).limit( 1 );

    // }
  }
);

router.post("/addunitcsv", manager, uploads.single("csv"), (req, res) => {
  if (req.file) {
    //convert csvfile to jsonArray
    csv()
      .fromFile(req.file.path)
      .then(async (jsonObj) => {
        try {
          const docs = jsonObj;

          const options = { ordered: true };
          const result = await Unit.insertMany(docs, options);
          res.send(result);
        } catch (error) {
          console.log(error);
        }
      });
  } else {
    res.send("Need to upload csv file");
  }
});

router.post("/addunit", async (req, res, next) => {
  try {
    const {
      email,
      address,
      city,
      zipcode,
      type,
      team,
      lastinspectioncompleted,
      bedrooms,
      fullbathrooms,
      halfbathrooms,
      additionalrooms,
      commonareas,
      outside,
    } = req.body;
    const unit = new Unit({
      email,
      address,
      city,
      zipcode,
      type,
      team,
      lastinspectioncompleted,
      bedrooms,
      fullbathrooms,
      halfbathrooms,
      additionalrooms: additionalrooms,
      commonareas: commonareas,
      outside: outside,
    });
    await unit.save();

    res.send({
      status: 200,
      message: "unit added successfully",
    });
  } catch (error) {
    console.log("Error", error);
    next(error);
  }
});

router.get("/getunit/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await Unit.findById(id);
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.put("/updateunit/:id", async (req, res, next) => {
  try {
    const {
      email,
      address,
      city,
      zipcode,
      type,
      team,
      lastinspectioncompleted,
      bedrooms,
      fullbathrooms,
      halfbathrooms,
      additionalrooms,
      commonareas,
      outside,
    } = req.body;
    await Unit.findByIdAndUpdate(req.params.id, {
      email: email,
      address: address,
      city: city,
      zipcode: zipcode,
      type: type,
      team: team,
      lastinspectioncompleted: lastinspectioncompleted,
      bedrooms: bedrooms,
      fullbathrooms: fullbathrooms,
      halfbathrooms: halfbathrooms,
      additionalrooms: additionalrooms,
      commonareas: commonareas,
      outside: outside,
    });
    res.send("Update ");
  } catch (error) {
    res.send(400).send("Server Error");
    next(error);
  }
});

router.get("/getunits/:email", async (req, res, next) => {
  try {
    const { email } = req.params;
    const data = await Unit.find({ email: email });
    console.log(email);
    res.send(data);
  } catch (error) {
    next(error);
  }
});

router.delete("/deleteunit/:id", async (req, res, next) => {
  try {
    console.log(req.body);
    await Unit.deleteOne({ _id: `${req.params.id}` });
    res.send({
      status: 200,
      message: "Unit deleted successfully",
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
