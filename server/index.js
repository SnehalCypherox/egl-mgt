const express = require("express");
const morgan = require("morgan");
const createError = require("http-errors");
require("dotenv").config();
require("./helper/init_mongodb.js");
const router = express.Router();
const cors = require("cors");
const { verifyAcessToken } = require("./helper/jwt_helper");
const { tenant, manager } = require("./helper/permissions");
const AuthRoute = require("./Routes/Auth.route");
const UnitRoute = require("./Routes/Unit.route");
const BuildingRoute = require("./Routes/Building.route");
const InspectionRoute = require("./Routes/Inspection.route");
const SettingsRoute = require("./Routes/Settings.route");
const CommunityRoute = require("./Routes/Community.route");
const TenantsRoute = require("./Routes/Tenants.route");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("hello from /// ");
});

app.use("/images", express.static("uploads"));
app.use("/auth", AuthRoute);
app.use("/unit", verifyAcessToken, UnitRoute);
app.use("/building", verifyAcessToken, BuildingRoute);
app.use("/community", verifyAcessToken, CommunityRoute);
app.use("/inspection", verifyAcessToken, InspectionRoute);
app.use("/settings", manager, verifyAcessToken, SettingsRoute);
app.use("/tenants", manager, verifyAcessToken, TenantsRoute);

app.use(async (req, res, next) => {
  next(createError.NotFound("this route is not found"));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = router;
