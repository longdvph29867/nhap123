import Joi from "joi";

export const productValid = Joi.object({
  category: Joi.string().required(),
  title: Joi.string().required().min(3),
  price: Joi.number().required().min(0),
  image: Joi.string().required(),
  description: Joi.string().required(),
});
