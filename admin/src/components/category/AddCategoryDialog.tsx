import React, { useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "../../rtk/api/globalApi";
import { CreateToaster } from "../../helper/toast";

export default function AddCategoryDialog() {
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [createCategory, createStatus] = useCreateCategoryMutation();
  const { isLoading, isSuccess, isError, data, error, status } = createStatus;
  console.log(createStatus);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  let allFields = watch();

  const handleCreateCategory = async () => {
    try {
      const formData = new FormData();
      formData.append("name", allFields.name);
      formData.append("activeStatus", allFields.activeStatus);
      formData.append("author", allFields.author);
      formData.append("image", allFields.image[0]);
      CreateToaster(() => createCategory(formData), "Creating category...", "Category created successfully!", "Failed to create category.");
      reset();
    } catch (error) {
      console.error(error);
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

          <div className="row mb-3 ">
            <label
              htmlFor="image"
              className="form-label h6 p_zero_first_cap mt-2 ">
              Category Image
            </label>
            <input
              type="file"
              className=" input_field_style form-control form-control-lg  px-2  border-0  rounded-0"
              {...register("image", { required: true })}
              placeholder="Category Image"
            />
            {errors.image && <span className="form_hook_error">This field is required</span>}
          </div>

          <div className="row mb-3 ">
            <label
              htmlFor="name"
              className="form-label h6 p_zero_first_cap mt-2 ">
              Category Name
            </label>
            <input
              className=" input_field_style form-control form-control-lg  px-2  border-0  rounded-0"
              {...register("name", { required: true })}
              placeholder="Category Name"
            />
            {errors.name && <span className="form_hook_error">This field is required</span>}
          </div>







          <div className="row ">
            <label
              htmlFor="activeStatus"
              className="form-label px-0 mt-2 h6   ">
              Status
            </label>

            <select
              {...register("activeStatus", { required: true })}
              className="form-select py-2 input_field_style border-0  rounded-0"
              aria-label="Banner Status">
              <option
                selected
                value="inActive">
                InActive
              </option>
              <option value="active">Active</option>
            </select>
            {errors.activeStatus && <span className="form_hook_error">This field is required</span>}
          </div>






          <div className="row">
            <label
              htmlFor="author"
              className="form-label px-0 mt-2 h6 ">
              Author
            </label>
            <input
              className=" input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              {...register("author", { required: true })}
              placeholder="Author"
            />
            {errors.author && <span className="form_hook_error">This field is required</span>}
          </div>








          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              className="customCard px-3"
              onClick={handleClose}>
              Cancel
            </Button>

            <Button
              type="submit"
              className={isLoading ? "not-allowed text-success customCard px-4" : "customCard px-4"}>
              {isLoading ? "Creating..." : "Add"}
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
