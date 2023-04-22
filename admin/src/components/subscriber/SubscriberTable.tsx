import React from "react";
import { MdDelete } from "react-icons/md";
import { format } from "timeago.js";
import { useDeleteSubscriberMutation, useGetAllSubscriberQuery } from "../../../redux/api/globalApi";
import { toast } from "react-toastify";

export default function SubscriberTable({ currentCount }: any) {
  const { data: subscribers } = useGetAllSubscriberQuery();
  const [deleteSubscriber] = useDeleteSubscriberMutation();

  const handleDeleteSubscriber = (id: any) => {
    deleteSubscriber(id);
    toast.success("Delete success");
  };

  return (
    <>
      <div className="customCard mt-2 mb-2">
        <table className="table  ">
          <thead>
            <tr className="customPrimaryTxtColor">
              <th scope="col">I.D</th>
              <th scope="col">Email</th>
              <th scope="col">CreatedAt</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers &&
              subscribers.allSubscriber.map((subscriber: any, index: any) => (
                <tr
                  key={index}
                  className="customPrimaryTxtColor custom_table_hover ">
                  <th scope="row">{currentCount - 5 + index + 1}</th>
                  <td>{subscriber.email.substring(0, 34)}</td>
                  <td>{format(subscriber.createdAt)}</td>

                  <td>
                    <MdDelete
                      className="delete_button_icon"
                      onClick={() => handleDeleteSubscriber(subscriber._id)}
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
