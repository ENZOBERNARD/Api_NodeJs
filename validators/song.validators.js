const { Joi } = require("express-validation");
/**
 * Song Validators
 */

const SongValidators = {
  validateCreate: {
    body: Joi.object({
      genre: Joi.string().max(80),
      titre: Joi.string().max(80).required(),
      auteur: Joi.string().max(100).required(),
    }),
  },
  validateUpdate: {
    params: Joi.object({
      id: Joi.string().guid().required(),
    }),
    body: Joi.object({
      genre: Joi.string().max(80),
      titre: Joi.string().max(80).required(),
      auteur: Joi.string().max(100).required(),
    }),
  },
};

module.exports = SongValidators;
