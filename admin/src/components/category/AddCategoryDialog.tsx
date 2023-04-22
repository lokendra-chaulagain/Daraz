import React, { useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "../../../redux/api/globalApi";
import { toast } from "react-toastify";
import CustomSpinner from "../CustomSpinner";

export default function AddCategoryDialog() {
  const [createCategory, createStatus] = useCreateCategoryMutation();
  const { isLoading, isSuccess, isError, data, error, status } = createStatus;
  console.log(createStatus);

  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  let allFields = watch();
  const success = () => toast.success("Create success");

  const handleCreateCategory = async (e: any) => {
    try {
      const formData = new FormData();
      formData.append("name", allFields.name);
      formData.append("image", allFields.image[0]);
      console.log(formData);

      await createCategory(formData);
      reset();
      success();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Grid
        container
        justifyContent="end">
        <Button
          size="large"
          onClick={handleClickOpen}
          className="customCard px-4">
          Add New
        </Button>
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}>
        <form
          onSubmit={handleSubmit(handleCreateCategory)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Category </h4>
          <p className="customPrimaryTxtColor">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem aspernatur enim incidunt omnis ducimus error similique provident, libero nobis perspiciatis?</p>

          {isLoading && <h5 className="text-primary">Uploading...</h5>}
          {isSuccess && <h5 className="text-success">Upload Success</h5>}
          {isError && <h5 className="text-danger">Upload Failure</h5>}

          <div className="row mb-3 ">
            <label
              htmlFor="name"
              className="form-label h6 p_zero_first_cap mt-2 ">
              Category Name
            </label>
            <input
              className=" input_field_style form-control form-control-lg  px-2  border-0  rounded-0"
              {...register("name", { required: "Required field" })}
              placeholder="Category Name"
            />
            {errors.name && <p className="form_hook_error">{`${errors.name.message}`}</p>}
          </div>

          <div className="row mb-3 ">
            <label
              htmlFor="image"
              className="form-label h6 p_zero_first_cap mt-2 ">
              Category Image
            </label>
            <input
              type="file"
              className=" input_field_style form-control form-control-lg  px-2  border-0  rounded-0"
              {...register("image", { required: "Required field" })}
              placeholder="Category Image"
            />
            {errors.image && <p className="form_hook_error">{`${errors.image.message}`}</p>}
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              className="customCard px-3"
              onClick={handleClose}>
              Cancel
            </Button>

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
      </Dialog>
    </>
  );
}
