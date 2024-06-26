import Joi from "joi";

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  name: Joi.string().required(),
  age: Joi.number().integer().required(),
  city: Joi.string().required(),
  zipCode: Joi.string().required(),
});

const idSchema = Joi.string().hex().length(24);

exports.validateUser = async (userDto) => {
  return await userSchema.validateAsync(userDto);
};

exports.validateId = async (id) => {
  return await idSchema.validateAsync(id);
};

exports.validateEmailAndZip = async ({ email, zipCode }) => {
  return await Joi.object({
    email: Joi.string().email().required(),
    zipCode: Joi.string().required(),
  }).validateAsync({ email, zipCode });
};
