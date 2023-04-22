import React from "react";
import TableHeading from "../TableHeading";
import AddColorDialog from "./AddColorDialog";
import { MdDelete } from "react-icons/md";
import { useDeleteColorMutation, useGetAllColorQuery } from "../../../redux/api/globalApi";
import { toast } from "react-toastify";

export default function ColorTable() {
  const { data: colors } = useGetAllColorQuery();
  const [deleteColor] = useDeleteColorMutation();

  const handleDeleteColor = (id: any) => {
    try {
      deleteColor(id);
      toast.success("Delete success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="d-flex align-items-center  ">
        <TableHeading heading={"All Colors"} />
        <AddColorDialog />
      </div>

      <div className="customCard mt-2 mb-5 ">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Colors Name</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {colors &&
              colors.map((color: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{index + 1}</th>
                  <td>{color.color}</td>

                  <td>
                    <MdDelete
                      className="delete_button_icon"
                      onClick={() => handleDeleteColor(color._id)}
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
