import React, { useContext, useState } from "react";
import { Grid, Dialog, Button } from "@mui/material";
import axios from "axios";
import { useForm } from "react-hook-form";
import { MiscellaneousContext } from "../../../context/MiscellaneousContext";
import { useCreateColorMutation, useGetAllColorQuery } from "../../../redux/api/globalApi";

export default function AddColorDialog({ setIsUpdated }: any) {
  const [createColor] = useCreateColorMutation();
 
  const { createSuccess, somethingWentWrong } = useContext(MiscellaneousContext);
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
  const handleAllField = watch();

  const handleCreateColor = async (handleAllField: any) => {
    try {
      createColor(handleAllField);
      handleClose();
      createSuccess();
      reset();
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
          onSubmit={handleSubmit(handleCreateColor)}
          className="customCard p-3 overflow_hidden">
          <h4>Create New Colors </h4>
          <p className="customPrimaryTxtColor">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, aspernatur. Modi dolores fugit iusto consectetur impedit veritatis, in error accusantium!</p>

          <div className="row ">
            <div className="col">
              <label
                htmlFor="color"
                className="form-label p_zero_first_cap mt-2 h6 ">
                Colors Name
              </label>
              <input
                className=" input_field_style form-control form-control-lg px-2  border-0  rounded-0"
                {...register("color", { required: "Required field" })}
                placeholder="Color"
              />
              {errors.color && <p className="form_hook_error">{`${errors.color.message}`}</p>}
            </div>
          </div>

          <div className="mt-3 d-flex justify-content-end  gap-2">
            <Button
              className="customCard px-3"
              onClick={handleClose}>
              Cancel
            </Button>
            <Button
              type="submit"
              className="customCard px-4">
              Add
            </Button>
          </div>
        </form>
      </Dialog>
    </>
  );
}
