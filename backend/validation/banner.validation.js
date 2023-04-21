import Joi from "joi";

const banner = Joi.object().keys({
  author: Joi.string().min(2).max(15).required(),
  image: Joi.string().min(5).max(255).required(),
});

export default banner;
