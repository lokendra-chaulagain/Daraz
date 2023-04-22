import React, { useState } from "react";
import TableHeading from "../TableHeading";
import { MdDelete } from "react-icons/md";
import Image from "next/image";
import { useDeleteMiniCategoryMutation, useGetAllMiniCategoryQuery } from "../../rtk/api/globalApi";
import moment from "moment";
import { AiTwotoneEdit } from "react-icons/ai";
import Link from "next/link";
import { DeleteToaster } from "../../helper/toast";
import SpinnerSmall from "../spinner/SpinnerSmall";

export default function Table() {
  const { data } = useGetAllMiniCategoryQuery<any>();
  const miniCategories = data && data.data;

  const [deleteMiniCategory, { isLoading: deleting, isSuccess, isError, error, data: deletedData }] = useDeleteMiniCategoryMutation();
  const [deletingMiniCategoryId, setDeletingMiniCategoryId] = useState<string>("");
  const handleMiniDeleteCategory = (id: string) => {
    setDeletingMiniCategoryId(id);
    DeleteToaster(deleteMiniCategory, id, "Deleting category...", "Category deleted successfully", "Failed to delete category");
  };

  const headers = ["S.N", "Category Image", "Name", "Slug", "Status", "Author", "Category", "Sub-Category", "CreatedAt", "UpdatedAt", "Actions"];

  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"Mini miniCategories"} />
        {/* <AddCategoryDialog /> */}
      </div>

      <div className="customCard mt-2 mb-5 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              {headers.map((header: string, index: number) => (
                <th
                  key={index}
                  scope="col">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {miniCategories &&
              miniCategories.map((category: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>

                  <td>
                    <div className="banner_table_image_div">
                      <Image
                        src={category.image}
                        quality={50}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-1"
                        alt="img"
                      />
                    </div>
                  </td>
                  <td>{category.name}</td>
                  <td>{category.slug}</td>
                  <td>{category.activeStatus}</td>
                  <td>{category.author}</td>
                  <td>{category.category ? category.category.name : "NA"}</td>
                  <td>{category.subCategory ? category.subCategory.name : "NA"}</td>
                  <td>{moment(category.createdAt).fromNow()}</td>
                  <td>{moment(category.updatedAt).fromNow()}</td>

                  <td>
                    <div className="d-flex ">
                      <Link href={`/category/${category._id}`}>
                        <div className="d-flex align-items-center">
                          <AiTwotoneEdit className="edit_button_icon" />
                        </div>
                      </Link>

                      <div>
                        {deletingMiniCategoryId === category._id ? (
                          <SpinnerSmall />
                        ) : (
                          <MdDelete
                            className="delete_button_icon"
                            onClick={() => handleMiniDeleteCategory(category._id)}
                            aria-label="delete"
                          />
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
