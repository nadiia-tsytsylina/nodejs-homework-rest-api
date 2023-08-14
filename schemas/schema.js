const Joi = require('joi');

const addSchema = Joi.object({
  name: Joi.string().min(2).max(30).required(),
  email: Joi.string().email().required(),
  phone: Joi.number().required(),
});

module.exports = addSchema;
