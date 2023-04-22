import React, { useContext, useState } from "react";
import { Button } from "@mui/material";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import axios from "axios";
import Image from "next/image";
import ImageUploading from "react-images-uploading";
import { useForm } from "react-hook-form";
import { useCreateProductMutation, useGetAllCategoryQuery, useGetAllColorQuery, useGetAllProductQuery, useGetAllSizeQuery } from "../../../redux/api/globalApi";
import CustomSpinner from "../CustomSpinner";
// import ReactQuill from 'react-quill';
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

import "react-quill/dist/quill.snow.css"; // Import CSS

export default function AddProductTable() {
  const { handleClose, createSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
  const [createProduct, createProductStatus] = useCreateProductMutation();

  const { isLoading, isSuccess, isError, data, error, status } = createProductStatus;

  const { data: colors } = useGetAllColorQuery();
  const { data: sizes } = useGetAllSizeQuery();
  const { data: categories } = useGetAllCategoryQuery();
  console.log(colors);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  const allFields = watch();
  console.log(allFields);

  // const [content, setContent] = useState("");

  const [description, setDescription] = React.useState("");
  const handleTextChange = (value: any) => {
    setDescription(value);
  };

  console.log(description);

  const [images, setImages] = useState([]);

  const handleCreateProduct = async (e: any) => {
    const formData = new FormData();
    formData.append("name", allFields.name);
    formData.append("description", description);
    formData.append("price", allFields.price);
    formData.append("sku", allFields.sku);
    formData.append("colors", allFields.colors);
    formData.append("sizes", allFields.sizes);
    formData.append("categoryId", allFields.categoryId);

    if (images) {
      for (let i = 0; i < allFields.images.length; i++) {
        formData.append("images", allFields.images[i]);
      }
    }

    try {
      createProduct(formData);
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <form
          onSubmit={handleSubmit(handleCreateProduct)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Product </h4>

          {isLoading && <h5 className="text-primary">Uploading...</h5>}
          {isSuccess && <h5 className="text-success">Upload Success</h5>}
          {isError && <h5 className="text-danger">Upload Failure</h5>}

          <div className="row ">
            <label
              htmlFor="name"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Name
            </label>
            <input
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("name", { required: "Required Field" })}
              placeholder="name"
            />
            {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}
          </div>

          <div className="row ">
            <label
              htmlFor="images"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Images
            </label>
            <input
              type="file"
              multiple
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("images", { required: "Required Field" })}
              placeholder="Images"
            />
            {errors.images && <p className="form_hook_error">{`${errors.images.message}`}</p>}
          </div>

          <div className="row ">
            <label
              htmlFor="price"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Price
            </label>
            <input
              type="number"
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("price", { required: "Required Field" })}
              placeholder="Price"
            />
            {errors.price && <p className="form_hook_error">{`${errors.price.message}`}</p>}
          </div>

          <div className="row ">
            <label
              htmlFor="sku"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Sku
            </label>
            <input
              type="number"
              className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
              {...register("sku", { required: "Required Field" })}
              placeholder="Sku"
            />
            {errors.sku && <p className="form_hook_error">{`${errors.sku.message}`}</p>}
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
                      {...register("color", { required: "Color is required" })}
                      className="form-check-input"
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

            {errors.color && <p className="form_hook_error">{`${errors.color.message}`}</p>}
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
                      {...register("size", { required: "size is required" })}
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

            {errors.size && <p className="form_hook_error">{`${errors.size.message}`}</p>}
          </div>

          <div className="row ">
            <label
              htmlFor="categoryId"
              className="form-label mt-3 p_zero_first_cap h6 ">
              CategoryId
            </label>

            <select
              {...register("categoryId", { required: "category is required" })}
              className="form-select input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              aria-label="Select category">
              <option
                selected
                value={"Null"}>
                Select Category
              </option>
              {categories &&
                categories.map((category, index) => (
                  <option
                    key={index}
                    value={category._id}>
                    {category.name}
                  </option>
                ))}
            </select>
            {errors.categoryId && <p className="form_hook_error">{`${errors.categoryId.message}`}</p>}
          </div>

         


          <div className="row ">
            <label
              htmlFor="description"
              className="form-label mt-3 p_zero_first_cap h6 ">
              Description
            </label>
            <div style={{ backgroundColor: "white", height: "45vh" }}>
            <ReactQuill
              className="text-black px-0 text-opacity-75"
              style={{ height: "40vh" }}
              value={description}
              onChange={handleTextChange}
              theme="snow"
              placeholder="Write description"
            />
          </div>
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            {isLoading ? (
              <CustomSpinner />
            ) : (
              <Button
                type="submit"
                className="customCard px-4">
                Add
              </Button>
            )}
          </div>
        </form>
      </div>
    </>
  );
}
