import Joi from "joi";

const subCategory = Joi.object().keys({
  name: Joi.string().min(3).max(32).required(),
  category: Joi.string().length(24).required(),
});

export default subCategory;
