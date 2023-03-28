const { Validator } = require("node-input-validator");
const bcrypt = require("bcrypt");
const User = require("../modal/User.modal");
const jwt = require("jsonwebtoken");

exports.change_password = async (req, res) => {
  try {
    User.findById(req.params.id, async (err, user) => {
      console.log(user);
      const v = new Validator(req.body, {
        old_password: "required",
        new_password: "required",
        confirm_password: "required",
      });

      const matched = await v.check();
      if (!matched) {
        console.log("not matched");
      }
      if (bcrypt.compare(req.body.old_password, user.password)) {
        const salt = await bcrypt.genSalt(10);
        let hashPassword = bcrypt.hash(req.body.confirm_password, salt);
        console.log(hashPassword);
        await User.findByIdAndUpdate(req.params.id, {
          id: user._id,
          password: hashPassword,
        });
        return res.status(200).send({
          message: "Password successfully compared",
          data: userData,
          token: token,
        });
      } else {
        return res.send({
          message: err,
        });
      }
    });
  } catch (err) {
    return res.status(400).send({
      message: err.message,
      data: err,
    });
  }
};
