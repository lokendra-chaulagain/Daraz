import slugify from "slugify";

const generateSlug = (str) => {
  return slugify(str, {
    replacement: "-",
    remove: undefined,
    lower: true,
  });
};

export default generateSlug;
