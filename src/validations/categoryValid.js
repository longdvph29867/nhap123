import Joi from "joi";

export const categoryValid = Joi.object({
  name: Joi.string().required(),
});
