import * as React from "react";
import Link from "next/link";
import { format } from "timeago.js";
import { IoMdEye } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { useDeleteContactMutation, useGetAllContactQuery } from "../../../redux/api/globalApi";
import { toast } from "react-toastify";

export default function MailTable({ currentCount }: any) {
  const { data: contacts } = useGetAllContactQuery();
  const [deleteContact] = useDeleteContactMutation();

  const handleDeleteContact = (id: any) => {
    try {
      deleteContact(id);
      toast.success("Delete success");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="customCard mt-2 mb-2">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">S.N</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Message</th>
              <th scope="col">Time</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts &&
              contacts.allContact.map((mail: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{currentCount - 5 + index + 1}</th>
                  <td>{mail.name.substring(0, 30)}</td>
                  <td>{mail.email.substring(0, 30)}</td>
                  <td>{mail.message.substring(0, 30)}</td>
                  <td>{format(mail.createdAt)}</td>

                  <td>
                    <div className="d-flex ">
                      <Link href={`/mail/${mail._id}`}>
                        <div className="d-flex align-items-center">
                          <IoMdEye className="edit_button_icon" />
                        </div>
                      </Link>

                      <MdDelete
                        className="delete_button_icon"
                        onClick={() => handleDeleteContact(mail._id)}
                        aria-label="delete"
                      />
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
