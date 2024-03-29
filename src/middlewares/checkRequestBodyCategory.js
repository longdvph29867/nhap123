import { categoryValid } from "../validations/categoryValid.js";

export const checkRequestBodyCategory = async (req, res, next) => {
  try {
    const { error } = categoryValid.validate(req.body, { abortEarly: false });

    if (error) {
      const errors = error.details.map((err) => err.message);
      return res.status(400).json({
        message: errors,
      });
    }

    next();
  } catch (error) {
    return res.status(400).json({
      name: error.name,
      message: error.message,
    });
  }
};
