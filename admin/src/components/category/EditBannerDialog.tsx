import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { HiArrowLeft } from "react-icons/hi";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { CreateToaster } from "../../helper/toast";
import { useGetSingleBannerQuery, useUpdateBannerMutation } from "../../rtk/api/globalApi";
import Image from "next/image";

export default function EditBannerDialog() {
  const router = useRouter();
  const id: any = router.query.id;
  console.log(id);

  const [updateBanner] = useUpdateBannerMutation();
  const { data } = useGetSingleBannerQuery<any>(id);
  const singleBanner = data && data.data;
  console.log(singleBanner);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();
  let allFields = watch();

  // useEffect(() => {
  //   reset(singleBanner);
  // }, [singleBanner]);

  const handleUpdateBanner = async () => {
    try {
      const formData = new FormData();
      formData.append("author", allFields.author);
      formData.append("status", allFields.status);
      formData.append("image", allFields.image[0]);
      // CreateToaster(() => updateBanner(formData), "Creating banner...", "Banner created successfully!", "Failed to create banner.");
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      {singleBanner && (
        <div>
          <form
            onSubmit={handleSubmit(handleUpdateBanner)}
            className="customCard p-3 overflow_hidden"
            method="post">
            <Link href={"/banner"}>
              <div className="arrow_back_div d-flex align-items-center gap-1 pb-2">
                <HiArrowLeft className="arrow_back" />
                <h4>Back</h4>
              </div>
            </Link>

            <h4>Edit Banner</h4>
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
              <Image
                src={singleBanner.image}
                height={40}
                width={60}
                objectFit="scale-down"
                alt="img"
              />
            </div>

            <div className="row ">
              <label
                htmlFor="status"
                className="form-label px-0 mt-2 h6   ">
                Status
              </label>

              <select
                {...register("status", { required: true })}
                value={singleBanner.status}
                className="form-select py-2 input_field_style border-0  rounded-0"
                aria-label="Banner Status">
                <option value="inActive">InActive</option>
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
                defaultValue={singleBanner.author}
              />
              {errors.author && <span className="form_hook_error">This field is required</span>}
            </div>

            <div className="mt-3 d-flex justify-content-end  gap-2">
              <Button
                className="customCard px-3"
                // onClick={handleClose}
              >
                Cancel
              </Button>

              {/* <Button
                type="submit"
                className={isLoading ? "not-allowed  customCard px-4" : "customCard px-4"}>
                {isLoading ? "Creating..." : "Add"}
              </Button> */}
            </div>
          </form>
        </div>
      )}
    </>
  );
}
