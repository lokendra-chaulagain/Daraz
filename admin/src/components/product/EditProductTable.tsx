import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Header from "../Header";
import Image from "next/image";
import { useGetAllCategoryQuery, useGetAllColorQuery, useGetAllSizeQuery, useGetSingleProductQuery } from "../../../redux/api/globalApi";

export default function EditProductTable() {
  const router = useRouter();
  const id = router.query.id;

  const { data: singleProduct } = useGetSingleProductQuery(id);
  const { data: categories } = useGetAllCategoryQuery();
  const { data: sizes } = useGetAllSizeQuery();
  const { data: colors } = useGetAllColorQuery();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const handleAllField = watch();

  // useEffect(() => {
  //   console.log(singleProduct);
  //   reset(singleProduct);
  // }, [singleProduct]);

  // const [images, setImages] = useState();
  // const onChange = (imageList) => {
  //   setImages(imageList);
  // };

  const updateProduct = async () => {
    // const formData = new FormData();
    // formData.append("name", handleAllField.name);
    // formData.append("color", handleAllField.color);
    // formData.append("size", handleAllField.size);
    // formData.append("category", handleAllField.category);
    // formData.append("description", handleAllField.description);
    // formData.append("featured", handleAllField.featured);
    // formData.append("topSelling", handleAllField.topSelling);
    // if (images) {
    //   formData.append("thumbnail", images[0].file, images[0].file.name);
    // }
    // try {
    //   const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/product/${id}`, formData);
    //   reset();
    //   updatedSuccess();
    //   setIsUpdated(9);
    //   console.log("Update success");
    // } catch (error) {
    //   console.log(error);
    //   somethingWentWrong();
    // }
  };
  return (
    <>
      {singleProduct && (
        <div>
          <Header pageTitle={`Product / Edit / ${id} `} />
          <form
            onSubmit={handleSubmit(updateProduct)}
            className="customCard p-3 overflow_hidden">
            <h4>Edit Product </h4>

            <div className="row ">
              <label
                htmlFor="name"
                className="form-label mt-3 p_zero_first_cap h6 ">
                Name
              </label>
              <input
                defaultValue={singleProduct.name}
                className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
                {...register("name", { required: true })}
                placeholder="name"
              />
              {errors.name && <span className="form_hook_error">This field is required</span>}
            </div>

            <div className="row ">
              <label
                htmlFor="images"
                className="form-label mt-3 p_zero_first_cap h6 ">
                Name
              </label>
              <input
                type="file"
                multiple
                // defaultValue={singleProduct.images[0]}
                className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
                {...register("images", { required: "name is required" })}
                placeholder="images"
              />
              {errors.images && <p className="form_hook_error">{`${errors.images.message}`}</p>}
              <div>
                {singleProduct.images.map((image: any, index: any) => (
                  <Image
                    key={index}
                    src={singleProduct.images[index]}
                    alt="img"
                    height={40}
                    width={40}
                    objectFit="scale-down"
                  />
                ))}
              </div>
            </div>

            <div className="row ">
              <label
                htmlFor="price"
                className="form-label mt-3 p_zero_first_cap h6 ">
                Price
              </label>
              <input
                defaultValue={singleProduct.price}
                className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
                {...register("price", { required: true })}
                placeholder="Price"
              />
              {errors.price && <span className="form_hook_error">This field is required</span>}
            </div>

            <div className="row ">
              <label
                htmlFor="category"
                className="form-label mt-3 p_zero_first_cap h6 ">
                Category
              </label>

              <select
                {...register("category", { required: true })}
                className="form-select input_field_style form-control form-control-lg px-2  border-0  rounded-0"
                aria-label="Select category">
                <option value="">Select Category</option>
                {categories &&
                  categories.map((category, index) => (
                    <option
                      key={index}
                      value={category.name}>
                      {category.name}
                    </option>
                  ))}
              </select>
              {errors.category && <span className="form_hook_error">This field is required</span>}
            </div>

            <div className="row">
              <label
                htmlFor="size"
                className="form-label mt-3 p_zero_first_cap h6 ">
                Size
              </label>

              <div className="choose_size_product_wrapper">
                {sizes &&
                  sizes.map((size, index) => (
                    <div className="form-check form-check-inline ">
                      <input
                        {...register("size", { required: true })}
                        className="form-check-input"
                        type="checkbox"
                        id="sizeCheckBox"
                        value={size.name}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="sizeCheckBox">
                        {" "}
                        {size.name}
                      </label>
                    </div>
                  ))}
              </div>

              {errors.size && <span className="form_hook_error">This field is required</span>}
            </div>

            <div className="row ">
              <label
                htmlFor="color"
                className="form-label mt-3 p_zero_first_cap h6 ">
                Color
              </label>

              <div className="choose_size_product_wrapper">
                {colors &&
                  colors.map((color, index) => (
                    <div
                      key={index}
                      className="form-check form-check-inline ">
                      <input
                        {...register("color", { required: true })}
                        type="checkbox"
                        id="colorCheckBox"
                        value={color.color}
                      />
                      <label
                        className="form-check-label"
                        htmlFor="colorCheckBox">
                        {" "}
                        {color.color}
                      </label>
                    </div>
                  ))}
              </div>

              {errors.color && <span className="form_hook_error">This field is required</span>}
            </div>

            <div className="mt-3 d-flex justify-content-end  gap-2">
              <Button
                type="submit"
                className="customCard px-4">
                Update
              </Button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
