import React from "react";
import TableHeading from "../TableHeading";
import AddCategoryDialog from "./AddCategoryDialog";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";
import { useDeleteCategoryMutation, useGetAllCategoryQuery } from "../../../redux/api/globalApi";
import Image from "next/image";

export default function CategoryTable() {
  const { data: categories } = useGetAllCategoryQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDeleteCategory = (id: any) => {
    try {
      deleteCategory(id);
      toast.success("Delete success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All Categories"} />
        <AddCategoryDialog />
      </div>

      <div className="customCard mt-2 mb-5 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Category Name</th>
              <th scope="col">Image</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((category: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>

                  <td>{category.name}</td>
                  <td>
                    <Image
                      src={category.image}
                      alt="img"
                      height={40}
                      width={40}
                      objectFit="scale-down"
                    />
                  </td>

                  <td>
                    <MdDelete
                      className="delete_button_icon"
                      onClick={() => handleDeleteCategory(category._id)}
                      aria-label="delete"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
