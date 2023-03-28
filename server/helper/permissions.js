module.exports = {
  manager: (req, res, next) => {
    if (req.body.role === "super_admin") {
      return next();
    }
    if (req.body.role === "manager") {
      return next();
    } else {
      return res.send("Not allowed");
    }
  },

  tenant: (req, res, next) => {
    if (req.body.role === "super_admin") {
      return next();
    }
    if (req.body.role === "tenant") {
      return next();
    } else {
      return res.send("Not allowed");
    }
  },
};
