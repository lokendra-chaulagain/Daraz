import Joi from "joi";

const category = Joi.object().keys({
  name: Joi.string().min(3).max(15).required(),
  image: Joi.string().min(5).max(255).required(),
});

export default category;
