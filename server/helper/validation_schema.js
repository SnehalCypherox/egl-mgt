const Joi = require("@hapi/joi");

const authSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(6).max(20).required(),
  firstname: Joi.string(),
  lastname: Joi.string(),
  user_role: Joi.string(),
});

module.exports = {
  authSchema,
};
