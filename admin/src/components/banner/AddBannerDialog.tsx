import React from "react";
import { Grid, Dialog, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { useCreateBannerMutation } from "../../rtk/api/globalApi";
import { CreateToaster } from "../../helper/toast";

export default function AddBannerDialog() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [createBanner, createStatus] = useCreateBannerMutation();
  const { isLoading, isSuccess, isError, data, error, status } = createStatus;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  let allFields = watch();

  const handleCreateBanner = async () => {
    try {
      const formData = new FormData();
      formData.append("author", allFields.author);
      formData.append("status", allFields.status);
      formData.append("image", allFields.image[0]);
      CreateToaster(() => createBanner(formData), "Creating banner...", "Banner created successfully!", "Failed to create banner.");
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
          onSubmit={handleSubmit(handleCreateBanner)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Banner </h4>
          <p className="customPrimaryTxtColor">To subscribe to this website, please enter your email address here. We will send updates occasionally.</p>

          <div className="row">
            <label
              htmlFor="image"
              className="form-label px-0 mt-2 h6 ">
              Banner Image
            </label>

            <input
              type="file"
              className=" input_field_style form-control form-control-lg mb-0  border-0  rounded-0"
              {...register("image", { required: true })}
              placeholder="Images"
            />
            {errors.image && <span className="form_hook_error">This field is required</span>}
          </div>

          <div className="row ">
            <label
              htmlFor="status"
              className="form-label px-0 mt-2 h6   ">
              Status
            </label>

            <select
              {...register("status", { required: true })}
              className="form-select py-2 input_field_style border-0  rounded-0"
              aria-label="Banner Status">
              <option
                selected
                value="inActive">
                InActive
              </option>
              <option value="active">Active</option>
            </select>
            {errors.status && <span className="form_hook_error">This field is required</span>}
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
              className={isLoading ? "not-allowed text-success  customCard px-4" : "customCard px-4"}>
              {isLoading ? "Creating..." : "Add"}
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
