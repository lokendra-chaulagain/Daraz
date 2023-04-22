import React, { useState } from "react";
import TableHeading from "../TableHeading";
import { MdDelete } from "react-icons/md";
import { useDeleteSubCategoryMutation, useGetAllSubCategoryQuery } from "../../rtk/api/globalApi";
import moment from "moment";
import { AiTwotoneEdit } from "react-icons/ai";
import Link from "next/link";
import { DeleteToaster } from "../../helper/toast";
import SpinnerSmall from "../spinner/SpinnerSmall";

export default function Table() {
  const { data, refetch } = useGetAllSubCategoryQuery<any>();
  const subCategories = data && data.data;

  const [deleteSubCategory, { isLoading: deleting, isSuccess, isError, error, data: deletedData }] = useDeleteSubCategoryMutation();
  const [deletingSubCategoryId, setDeletingSubCategoryId] = useState<string>("");
  const handleDeleteSubCategory = (id: string) => {
    setDeletingSubCategoryId(id);
    DeleteToaster(deleteSubCategory, id, "Deleting sub-category...", "Sub-Category deleted successfully", "Failed to delete sub-category");
    refetch();
  };

  const headers = ["S.N", "Name", "Slug", "Status", "Author", "Category", "CreatedAt", "UpdatedAt", "Actions"];

  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"Sub subCategories"} />
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
            {subCategories &&
              subCategories.map((category: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{category.name}</td>
                  <td>{category.slug}</td>
                  <td>{category.activeStatus}</td>
                  <td>{category.author}</td>
                  <td>{category.category ? category.category.name :"NA"}</td>
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
                        {deletingSubCategoryId === category._id ? (
                          <SpinnerSmall />
                        ) : (
                          <MdDelete
                            className="delete_button_icon"
                            onClick={() => handleDeleteSubCategory(category._id)}
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
