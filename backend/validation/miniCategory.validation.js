import Joi from "joi";

const miniCategory = Joi.object().keys({
  name: Joi.string().min(3).max(32).required(),
  category: Joi.string().length(24).required(),
  subCategory: Joi.string().length(24).required(),
});

export default miniCategory;
