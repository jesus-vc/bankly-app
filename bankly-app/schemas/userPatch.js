const Joi = require("joi");

const schemaUserPatch = Joi.object({
  first_name: Joi.string(),
  last_name: Joi.string(),
  phone: Joi.string(),
  email: Joi.string(),
});

module.exports = { schemaUserPatch };
